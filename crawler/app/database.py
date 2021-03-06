import logging
import os
from typing import Tuple

from elasticsearch import Elasticsearch, logger as es_logger

es_logger.setLevel(level=logging.ERROR)

ES_HOST = os.getenv('ES_HOST', default='http://es:9200')
ES_INDEX = os.getenv('ES_INDEX', default='news')


class sessionmaker:
    def __init__(self, host: str, index: str):
        self._host = host
        self._index = index
    
    def __call__(self) -> Tuple[Elasticsearch, str]:
        return Elasticsearch(hosts=[self._host]), self._index
    
SessionLocal = sessionmaker(host=ES_HOST, index=ES_INDEX)
