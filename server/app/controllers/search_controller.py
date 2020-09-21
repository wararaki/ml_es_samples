from fastapi import APIRouter

from ..models.result import Result
from ..services.search import SearchService


router = APIRouter()


@router.get('/ping')
def ping():
    return 'ping'

@router.get('/search', response_model=Result)
def search():
    return {'result': SearchService.search()}
