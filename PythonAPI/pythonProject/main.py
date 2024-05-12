from typing import Union

from fastapi import FastAPI

import json

from requests import Request
from starlette.responses import JSONResponse
from tqdm import tqdm
from qdrant_client.models import PointStruct
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.models import VectorParams, Distance
import numpy as np
from dotenv import load_dotenv
from pathlib import Path
import os
import api.live_searching_api as live_searching
import dto.dtos as dto
import logging
import traceback
from api.mysql_insert import Mysql_Manager

dotenv_path = Path(".env")
load_dotenv(dotenv_path=dotenv_path)
QDRANT_HOST = str(os.getenv("QDRANT_HOST"))
QDRANT_PORT = str(os.getenv("PORT"))

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = FastAPI()

# Qdrant setting
# loaded_embeddings_topic = np.load("qdrant/embeddings_topic.npy")  # 경로
# QDRANT_URL = f"http://{QDRANT_HOST}:{QDRANT_PORT}"
# client = QdrantClient(url=QDRANT_URL)
# my_collection = "yes24_v2_collection"

search = live_searching.LiveBookSearcher()


# 모든 예외를 처리하는 공통 예외 처리기
@app.exception_handler(Exception)
async def universal_exception_handler(request: Request, exc: Exception):
    # 스택 트레이스 로깅
    logger.error("Uncaught exception: %s", exc, exc_info=True)
    # 선택적으로 traceback을 직접 출력할 수도 있습니다:
    traceback.print_exc()

    # ApiResponse 객체 사용
    response = dto.ApiResponse(
        status=500,
        message="SERVER ERROR",
        result={"error": str(exc)}
    )
    return JSONResponse(
        status_code=500,
        content=response
    )


@app.get("/fastapi")
def read_root():
    return {"Hello": "World"}


@app.get("/fastapi/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/fastapi/error")
def make_error():
    1 / 0
    return {"error": "error"}

@app.get("/fastapi/db-connection-test")
def mysql_test():
    mysql_manager =Mysql_Manager()
    selected = mysql_manager.select_test()
    return dto.ApiResponse(status=200, message="mysql_test 성공", result=selected)


@app.get("/fastapi/book/live")
def live_keyword_searching(search_sentence: Union[str, None] = None):
    logger.info(f"search_sentence=[{search_sentence}]")

    if (search_sentence == None or len(search_sentence.strip()) == 0):
        return dto.ApiResponse(status=400, message="검색어를 입력해주세요.", result=search_sentence)

    response = search.live_keyword_searching(search_sentence)

    return dto.ApiResponse(status=200, message="live_keyword_searching 성공", result=response)


@app.get("/fastapi/book/momory")
def memorial_book_searching(product_id: Union[int] = None):
    logger.info(f"product_id=[{product_id}]")
    response = search.memorial_book_searching(product_id)

    return dto.ApiResponse(status=200, message="memorial_book_searching 성공", result=response)
