from typing import Any, Optional, Dict

# TODO: ファイル名とクラス名を合わせる。
class QueryBuilder:
    @classmethod
    def build(clf, query: Optional[str]) -> Dict[str, Any]:
        if query is None or query == '':
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
