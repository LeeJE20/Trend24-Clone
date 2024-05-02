import { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordFilter from "../components/pages/trendsearch/KeywordFilter";
import BookList from "../components/pages/trendsearch/BookList";

import { bookListData, Book } from "../constants/DummyData";

const TrendSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string[]>([]);

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

  return (
    <Body>
      <FilterContainer>
        <KeywordFilter
          selectedKeyword={selectedKeyword}
          onKeywordChange={handleKeywordChange}
          onSearch={handleSearch}
        />
      </FilterContainer>
      <BookListContainer>
        <BookList bookList={bookList} title="추천 책 도서" />
      </BookListContainer>
    </Body>
  );
};

const Body = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
`;

const FilterContainer = styled.div`
  border: 1px solid black;
  width: 100%;
`;

const BookListContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  overflow-y: auto;
`;

export default TrendSearch;
