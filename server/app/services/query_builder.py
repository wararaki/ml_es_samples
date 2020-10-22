from typing import Any, Dict


class QueryBuilder:
    @classmethod
    def build(clf, query: str, offset: int, limit: int=10) -> Dict[str, Any]:
        if query is None or query == '':
            return {'query': {'match_all': {}}}
        
        terms = []
        for keyword in query.strip().split():
            terms.append({'match_phrase': {'title': keyword}})
            terms.append({'match_phrase': {'content': keyword}})
        
        skip = 0
        if offset is not None:
            skip = offset * limit

        return {
            'track_total_hits': True,
            'query': {
                'bool': {
                    'should': terms
                }
            },
            'size': limit,
            'from': skip
        }
