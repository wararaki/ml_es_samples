from typing import Any, Dict, List, Tuple

from ..models.news import News


class ResponseFormatter:
    @classmethod
    def format(clf, response: Dict[str, Any]) -> Tuple[int, List[News]]:
        hits = response.get('hits')
        news = list(map(lambda x: News(**x.get('_source')), hits.get('hits')))
        total = hits.get('total').get('value')
        return total, news
