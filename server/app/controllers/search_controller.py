from typing import Optional, Tuple

import elasticsearch
from elasticsearch import Elasticsearch
from fastapi import APIRouter, Depends, HTTPException

from ..database import SessionLocal
from ..models.result import Result, News
from ..services.search_service import SearchService


router = APIRouter()


# Dependency
def get_es() -> Tuple[Elasticsearch, str]:
    es, index = SessionLocal()
    try:
        yield (es, index)
    finally:
        es.close()


@router.get('/ping')
def ping():
    return 'ping'

@router.get('/search', response_model=Result)
def search(q: Optional[str]=None, page: Optional[int]=None, limit: Optional[int]=10, es_info: Tuple[Elasticsearch, str] = Depends(get_es)):
    try:
        search_result = SearchService.search(q, page, limit, es_info[0], es_info[1])
    except elasticsearch.exceptions.NotFoundError as e:
        raise HTTPException(
            status_code=404,
            detail='Item not found',
            headers={'X-Error': 'There goes my error.'}
        )
    return search_result

@router.get('/news/{document_id}', response_model=News)
def news(document_id: str, es_info: Tuple[Elasticsearch, str] = Depends(get_es)):
    try:
        news_result = SearchService.search_detail(document_id, es_info[0], es_info[1])
    except elasticsearch.exceptions.NotFoundError as e:
        raise HTTPException(
            status_code=404,
            detail='Item not found',
            headers={'X-Error': 'There goes my error.'}
        )
    return news_result
