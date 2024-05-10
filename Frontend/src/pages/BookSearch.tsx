import { useEffect, useState } from "react";
import styled from "styled-components";
import BookFilter from "../components/pages/bookSearch/BookFilter";
import BookList from "../components/common/book/BookList";
import { BookType, PageInfo } from "../constants/Type/Type";
import { getSearchBook } from "../apis/searchApi";

const BookSearch = () => {
  const [bookList, setBookList] = useState<BookType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const getBookList = async () => {
    try {
      return await getSearchBook({
        title: searchText,
        category: selectedCategory,
        page: currentPage - 1,
        size: itemsPerPage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList().then((res) => {
      if (res.length !== 0) {
        setBookList(res.list);
        setCurrentPage(1);
        setTotalElements(res.pageInfo.totalElements);
        setTotalPages(res.pageInfo.totalPages);
      }
    });
  }, [searchText, selectedCategory]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleCategoryChange = (category: string) => {
    setSearchText("");
    setSelectedCategory(category);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <Container>
      <Title>도서 검색</Title>
      <SearchContainer>
        <BookFilter
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          handleSearch={handleSearch}
        />
      </SearchContainer>
      <BookListContainer>
        <BookList
          bookList={bookList}
          title="도서 검색 결과"
          pageInfo={
            {
              page: currentPage,
              size: itemsPerPage,
              totalElements: totalElements,
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
  font-size: 2.5rem;
  margin: 20px 10px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
`;

const BookListContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
`;

export default BookSearch;
