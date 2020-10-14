from pydantic import BaseModel


class News(BaseModel):
    news_id: str
    url: str
    datetime: str
    title: str
    content: str
    label: str
