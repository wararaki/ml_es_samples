from typing import Any, Dict, List, Union

from ..models.news import News


class ResponseFormatter:
    @classmethod
    def format(clf, response: Dict[str, Any]) -> Dict[str, Union[int, List[News]]]:
        hits = response.get('hits')
        news = list(map(lambda x: News(news_id=x.get('_id'), **x.get('_source')), hits.get('hits')))
        total = hits.get('total').get('value')
        return {'total': total, 'news': news}
