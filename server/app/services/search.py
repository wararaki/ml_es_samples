from typing import List, Optional, Tuple

from elasticsearch import Elasticsearch

from ..models.news import News
from .query import QueryBuilder
from .response import ResponseFormatter


class SearchService:
    @classmethod
    def search(clf, query: Optional[str], es: Elasticsearch, index: str) -> Tuple[int, List[News]]:
        # TODO: 依存を取り除く。今は検索時に elasticsearch のメソッドを直接呼び出しているので、Elasticsearch から切り替えるとき、メソッドの改修コストが高くなる。
        es_query = QueryBuilder.build(query)
        response = es.search(index=index, body=es_query)
        return ResponseFormatter.format(response)
