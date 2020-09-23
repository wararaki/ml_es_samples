import os
from typing import Tuple

from elasticsearch import Elasticsearch


ES_HOST = os.getenv('ES_HOST', 'http://es:9200')
ES_INDEX = os.getenv('ES_INDEX', 'news')


class sessionmaker:
    def __init__(self, host: str, index: str):
        self._host = host
        self._index = index
    
    def __call__(self) -> Tuple[Elasticsearch, str]:
        return Elasticsearch(hosts=[self._host]), self._index

SessionLocal = sessionmaker(host=ES_HOST, index=ES_INDEX)
