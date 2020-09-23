from typing import Optional, Tuple

from elasticsearch import Elasticsearch
from fastapi import APIRouter, Depends

from ..database import SessionLocal
from ..models.result import Result
from ..services.search import SearchService


router = APIRouter()


# Dependency
def get_es() -> Elasticsearch:
    es, index = SessionLocal()
    try:
        yield (es, index)
    finally:
        es.close()


@router.get('/ping')
def ping():
    return 'ping'

@router.get('/search', response_model=Result)
def search(q: Optional[str]=None, es_info: Tuple[Elasticsearch, str] = Depends(get_es)):
    total, news = SearchService.search(q, es_info[0], es_info[1])
    return {'total': total, 'news': news}
