import { useEffect, useState } from "react";
import styled from "styled-components";
import BookList from "../components/pages/trendsearch/BookList";
import BookFilter from "../components/pages/bookSearch/BookFilter";
import {
  bookListData,
  Book,
  PageInfo,
} from "../constants/DummyData/BookListData";

const BookSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setBookList(bookListData);
  }, []);

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
      <Title>도서 검색</Title>
      <SearchContainer>
        <BookFilter />
      </SearchContainer>
      <BookListContainer>
        <BookList
          bookList={currentItems}
          title="도서 검색 결과"
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 3.5rem;
  margin: 20px 10px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 20%;
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

export default BookSearch;
