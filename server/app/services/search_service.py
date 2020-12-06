import logging
from typing import Dict, List, Optional, Union

import elasticsearch
from elasticsearch import Elasticsearch

from ..models.news import News
from .query_builder import QueryBuilder
from .response_formatter import ResponseFormatter


logger = logging.getLogger(__name__)


class SearchService:
    @classmethod
    def search(clf, query: Optional[str], page: Optional[int], limit: Optional[int], es: Elasticsearch, index: str) -> Dict[str, Union[int, List[News]]]:
        if query == '':
            return {'total': 0, 'news': []}

        # TODO: 依存を取り除く。今は検索時に elasticsearch のメソッドを直接呼び出しているので、Elasticsearch から切り替えるとき、メソッドの改修コストが高くなる。
        es_query = QueryBuilder.build(query, page, limit)
        try:
            response = es.search(index=index, body=es_query)
        except elasticsearch.exceptions.NotFoundError as e:
            logger.error('Not Found Error %s', e, exc_info=True)
            raise e

        return ResponseFormatter.format(response)

    @classmethod
    def search_detail(clf, document_id: str, es: Elasticsearch, index: str) -> News:
        try:
            response = es.get(index=index, id=document_id)
        except elasticsearch.exceptions.NotFoundError as e:
            logger.error('Not Found Error %s', e, exc_info=True)
            raise e
        return News(news_id=response.get('_id'), **response.get('_source'))
