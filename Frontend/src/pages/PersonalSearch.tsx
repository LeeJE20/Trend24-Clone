import styled from "styled-components";
import PersonalSearchBox from "../components/pages/PersonalRecommend/PersonalSearchBox";
import PersonalSearchList from "../components/pages/PersonalRecommend/PersonalSearchList";
import { useEffect, useState } from "react";
import {
  bookListData, Book
} from "../constants/DummyData/BookListData";


const PersonalSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    setBookList(bookListData);
  }, []);

  return (
    <Container>
      <SearchWrapper>
        <PersonalSearchBox />
      </SearchWrapper>
      <BookListWrapper>
        <PersonalSearchList bookList={bookList}/>
      </BookListWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 50%;
`;
const BookListWrapper = styled.div`
  width: 30%;
`;

export default PersonalSearch;
