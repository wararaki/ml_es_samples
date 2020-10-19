import logging
import os
from time import sleep
import urllib.parse

from elasticsearch.client import Elasticsearch

from .config import Config
from .database import SessionLocal
from .services import Downloader, NewsLoader, Parser, Writer


logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def es_health_check(es: Elasticsearch):
    n_retry = 0
    wating_time = 30 # sec
    while True:
        if n_retry == 10:
            logger.error('Failed to access to the elasticsearch.')
            raise ConnectionError()
        n_retry += 1

        # health check
        try:
            response = es.cluster.health()
        except:
            logger.warning('elasticsearch is not launched.')
            sleep(wating_time)
            continue

        if not response.get('status') == 'red':
            break

        logger.warning('Wating until the elasticsearch is running...')
        sleep(wating_time)

    logger.info('elasticsearch is running.')


def main():
    config = Config.load()
    filename = os.path.basename(urllib.parse.urlparse(config.news_url).path)
    es, index = SessionLocal()

    es_health_check(es)

    if es.indices.exists(index) and es.count(index=index).get('count') > 0:
        logger.info('There is data in the %s index. skip data insertion.', index)
        return

    try:
        Downloader.download(config.news_url, filename)
        items = map(lambda x: Parser.parse(*x), NewsLoader.load(filename))
        Writer.write(es, index, config.mapping_path, items)
    except Exception as e:
        logger.error('Data insertion error.')
        raise e
    finally:
        if os.path.exists(filename):
            os.remove(filename)
    logger.info('DONE')


if __name__ == '__main__':
    main()
