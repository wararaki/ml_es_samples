from pydantic import BaseModel


class News(BaseModel):
    url: str
    datetime: str
    title: str
    content: str
    label: str
