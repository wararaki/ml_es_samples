from dataclasses import asdict
from typing import Iterator

from elasticsearch import Elasticsearch, helpers

from ..models.news import News


class Writer:
    @classmethod
    def write(clf, es: Elasticsearch, index: str, news_stream: Iterator[News]):
        helpers.bulk(es, map(lambda news: {'_index': index, '_source': asdict(news)}, news_stream))
