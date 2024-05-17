import time

from .cuda_model import CudaModel
from .mysql_insert import Mysql_Manager
from .qdrant_searching import QdrantSearcher
import dto.live_searching_dto as dto
from api.mysql_insert import Mysql_Manager


class LiveBookSearcher:
    def __init__(self):
        now_time = time.time()
        self.cuda_model = CudaModel('CPU')
        print(f'CUDA 로딩 시간: {time.time() - now_time}')

        now_time = time.time()
        self.Qsearcher = QdrantSearcher()
        print(f'Qdrant 로딩 시간: {time.time() - now_time}')

        now_time = time.time()
        self.sql_manager = Mysql_Manager()
        print(f'Mysql_Manager 로딩 시간: {time.time() - now_time}')

    # For Fast API
    def live_keyword_searching(self, search_sentence):
        if search_sentence is not '':
            print(f'Start Searching {search_sentence}')

            search_vector = self.cuda_model.model.encode(search_sentence)

            search_results = self.Qsearcher.search_items(search_vector, search_sentence, 10)

            mysql_manager = Mysql_Manager()
            results = []
            for search_result in search_results:
                book_info = mysql_manager.select_book_by_id(search_result['book_id'])
                book_model = dto.BookResponse(
                    book_id=book_info[0],
                    product_id=book_info[6],
                    product_name=book_info[7],
                    category_name=book_info[4],
                    search_keyword=book_info[9],
                    total_click_count=book_info[10],
                    total_order_count=book_info[12],
                    total_order_amount=book_info[11],
                    sale_price=book_info[8],
                    contents=book_info[5],
                    total_purchase_count=book_info[13]
                )
                results.append(book_model)

            return results

        return None

    # For Fast API
    def memorial_book_searching(self, memorial_book, top_k=30):  # memorial_book :: product_id
        if memorial_book is not None:
            # 연관 책 추천 :: 현재는 DB의 모든 책들 중에서 검색,
            # 추후에 같은 질문을 선택한 사람들이 선택한 책중으로 바뀔 예정
            results = self.Qsearcher.find_memorial_book(memorial_book, top_k)

            '''
            DB에 SQL로 결과를 업로드할 부분 :: 테이블 미완성으로 대기
            self.sql_manager.{TBD}
            '''

            return results

        return None

    def memorial_book_searching_real_service(self, memorial_book, question_id, top_k=30):  # memorial_book :: product_id
        if memorial_book is not None:
            # 연관 책 추천 :: 현재는 DB의 모든 책들 중에서 검색,
            # 추후에 같은 질문을 선택한 사람들이 선택한 책중으로 바뀔 예정
            results = self.Qsearcher.find_memorial_book_real_service(memorial_book, question_id, top_k)

            '''
            DB에 SQL로 결과를 업로드할 부분 :: 테이블 미완성으로 대기
            self.sql_manager.{TBD}
            '''

            return results

        return None
