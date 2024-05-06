import { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordFilter from "../components/pages/trendsearch/KeywordFilter";
import BookList from "../components/pages/trendsearch/BookList";
import {
  bookListData,
  Book,
  PageInfo,
} from "../constants/DummyData/BookListData";

const TrendSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setBookList(bookListData);
  }, []);

  const handleKeywordChange = (keywords: string[]) => {
    setSelectedKeyword(keywords);
  };

  const handleSearch = () => {
    alert(selectedKeyword);
    // bookList api 호출하고 bookList 바꿔주는 코드
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookList.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = bookList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Container>
      <Title>트렌드 검색</Title>
      <FilterContainer>
        <KeywordFilter
          selectedKeyword={selectedKeyword}
          onKeywordChange={handleKeywordChange}
          onSearch={handleSearch}
        />
      </FilterContainer>
      <BookListContainer>
        <BookList
          bookList={currentItems}
          title="추천 책 도서"
          pageInfo={
            {
              page: currentPage,
              size: itemsPerPage,
              totalElements: totalItems,
              totalPages: totalPages,
            } as PageInfo
          }
          onNextPage={nextPage}
          onPrevPage={prevPage}
        />
      </BookListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 3rem;
  height: 30px;
  margin: 20px 10px;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  width: 100%;
  min-height: 180px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: white;
`;

const BookListContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  background-color: white;
  border-radius: 20px;
`;

export default TrendSearch;
