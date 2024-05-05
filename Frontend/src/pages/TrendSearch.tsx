import { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordFilter from "../components/pages/trendsearch/KeywordFilter";
import BookList from "../components/pages/trendsearch/BookList";
import { bookListData, Book } from "../constants/DummyData/BookListData";

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
        <BookList bookList={bookList} title="추천 책 도서" />
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
