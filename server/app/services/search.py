from elasticsearch import Elasticsearch


es = Elasticsearch(hosts=['http://es:9200'])


class SearchService:
    @classmethod
    def search(clf) -> dict:
        return es.search()
