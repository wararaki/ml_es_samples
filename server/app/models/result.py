from typing import Any, Dict

from pydantic import BaseModel


class Result(BaseModel):
    result: Dict[str, Any]
