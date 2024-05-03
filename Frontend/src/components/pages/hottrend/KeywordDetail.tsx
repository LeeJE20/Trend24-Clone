import styled from "styled-components";
import { useState, useEffect } from "react";
import KeywordCalendar from "./KeywordCalendar";
import KeywordSource from "./KeywordSource";
import BookList from "../trendsearch/BookList";

import { bookListData, Book, referenceData } from "../../../constants/DummyData";

const KeywordDetail = ({ keyword }: { keyword: string }) => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    setBookList(bookListData);
  }, [keyword]);

  return (
    <Container>
      <BookWrapper>
        <BookList bookList={bookList} title={"# " + keyword} />
      </BookWrapper>

      <KeywordCalendarWrapper>
        <KeywordCalendar />
      </KeywordCalendarWrapper>

      <KeywordSourceWrapper>
        <KeywordSource type={referenceData.platform} originData={referenceData.data} />
      </KeywordSourceWrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  grid-template-areas:
    "book book"
    "keyword source";
`;

const BookWrapper = styled.div`
  grid-area: book;
  overflow-y: auto;
  box-shadow: 1px 0px 5px 1px #67676755;
  background-color: white;
  box-sizing: border-box;
  margin: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const KeywordCalendarWrapper = styled.div`
  grid-area: keyword;
  box-shadow: 1px 0px 5px 1px #67676755;
  background-color: white;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 10px;
`;

const KeywordSourceWrapper = styled.div`
  grid-area: source;
  box-shadow: 1px 0px 5px 1px #67676755;
  background-color: white;
  box-sizing: border-box;
  margin: 10px 10px 10px 5px;
  border-radius: 10px;
`;

export default KeywordDetail;
