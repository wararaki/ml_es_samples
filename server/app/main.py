from fastapi import FastAPI

from .controllers import search_controller


api = FastAPI()

api.include_router(search_controller.router)
