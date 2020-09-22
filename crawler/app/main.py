import logging
import os
import urllib

from .database import es, ES_INDEX
from .services import Downloader, Loader, Parser, Writer


logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def main():
    url = 'https://www.rondhuit.com/download/ldcc-20140209.tar.gz'
    filename = os.path.basename(urllib.parse.urlparse(url).path)

    try:
        Downloader.download(url, filename)
        # TODO: tuple 参照ではなく,変数２つを読み込みたい
        items = map(lambda x: Parser.parse(x[0], x[1]), Loader.load(filename))
        Writer.write(es, ES_INDEX, items)
    except Exception as e:
        raise e
    finally:
        if os.path.exists(filename):
            os.remove(filename)
    logger.info('DONE')


if __name__ == '__main__':
    main()
