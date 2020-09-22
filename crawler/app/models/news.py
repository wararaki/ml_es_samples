from dataclasses import dataclass

@dataclass
class News:
    url: str
    datetime: str
    title: str
    content: str
    label: str
