from typing import Any, Optional, Dict


class QueryBuilder:
    @classmethod
    def build(clf, query: Optional[str]) -> Dict[str, Any]:
        if query is None:
            return {'query': {'match_all': {}}}
        
        terms = []
        for keyword in query.strip().split():
            terms.append({'match_phrase': {'title': keyword}})
            terms.append({'match_phrase': {'content': keyword}})

        return {
            'track_total_hits': True,
            'query': {
                'bool': {
                    'should': terms
                }
            }
        }
