from pydantic import BaseModel
from typing import Generic, TypeVar, Optional

# 제네릭 타입 변수 T를 정의합니다.
T = TypeVar('T')

class BookResponse(BaseModel):
    book_id: int
    product_id: int
    product_name: str
    category_name: str
    search_keyword: str
    total_click_count: int
    total_order_count: int
    total_order_amount: int
    sale_price: int
    contents: str
    total_purchase_count: Optional[int] = 0