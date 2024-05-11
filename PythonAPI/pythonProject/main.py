from typing import Union

from fastapi import FastAPI

import json
from tqdm import tqdm
from qdrant_client.models import PointStruct
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.models import VectorParams, Distance
import numpy as np
from dotenv import load_dotenv
from pathlib import Path
import os

dotenv_path = Path(".env")
load_dotenv(dotenv_path=dotenv_path)
QDRANT_HOST = str(os.getenv("QDRANT_HOST"))
QDRANT_PORT = str(os.getenv("PORT"))




app = FastAPI()


# Qdrant setting
loaded_embeddings_topic = np.load("qdrant/embeddings_topic.npy")  # 경로
client = QdrantClient(url=f"http://{QDRANT_HOST}:{QDRANT_PORT}")
my_collection = "yes24_v2_collection"



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/book/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    query_vector = loaded_embeddings_topic[item_id]
    search_results = client.search(my_collection, query_vector)
    return {"search_results": search_results}