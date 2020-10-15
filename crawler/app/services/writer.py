from dataclasses import asdict
import json
import logging
from typing import Iterator

from elasticsearch import Elasticsearch, helpers

from ..models.news import News


logger = logging.getLogger(__name__)


class Writer:
    @classmethod
    def write(clf, es: Elasticsearch, index: str, mapping_path: str, news_stream: Iterator[News]):
        if not es.indices.exists(index):
            with open(mapping_path, 'r') as f:
                mapping = json.load(f)
            es.indices.create(index=index, body=mapping)
    
        helpers.bulk(es, map(lambda news: {'_index': index, '_source': asdict(news)}, news_stream))
