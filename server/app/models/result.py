from typing import List

from pydantic import BaseModel

from .news import News


class Result(BaseModel):
    total: int
    news: List[News]
