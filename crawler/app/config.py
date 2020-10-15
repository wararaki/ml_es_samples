from dataclasses import dataclass
import os


@dataclass
class Config:
    news_url: str
    mapping_path: str

    @classmethod
    def load(cls):
        news_url = os.getenv('NEWS_URL', 'https://www.rondhuit.com/download/ldcc-20140209.tar.gz')
        mapping_path = os.getenv('ES_MAPPING', default='mapping.json')

        return cls(news_url=news_url, mapping_path=mapping_path)
