from typing import Any, Dict


class QueryBuilder:
    @classmethod
    def build(clf, query: str, page: int, limit: int=10) -> Dict[str, Any]:
        terms = []
        for keyword in query.strip().split():
            terms.append({'match_phrase': {'title': keyword}})
            terms.append({'match_phrase': {'content': keyword}})
        
        offset = 0
        if page is not None:
            offset = max(0, page-1) * limit

        return {
            'track_total_hits': True,
            'query': {
                'bool': {
                    'should': terms
                }
            },
            'size': limit,
            'from': offset
        }
