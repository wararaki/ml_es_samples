from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .controllers import search_controller

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

api.include_router(search_controller.router)
