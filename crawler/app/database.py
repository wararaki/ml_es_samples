import json
import os

from elasticsearch import Elasticsearch


ES_HOST = os.getenv('ES_HOST', default='http://localhost:9200')
ES_INDEX = os.getenv('ES_INDEX', default='news')
ES_MAPPING = os.getenv('ES_MAPPING', default='mapping.json')


es = Elasticsearch(hosts=[ES_HOST])


def _is_index_existed() -> bool:
    return es.indices.exists(ES_INDEX)

def init():
    if _is_index_existed():
        # already created
        return

    with open(ES_MAPPING) as f:
        mapping = json.load(f)
    es.indices.create(index=ES_INDEX, body=mapping)
