import styled from "styled-components";
import { useState, useEffect } from "react";
import KeywordChart from "./KeywordChart";
import KeywordSource from "./KeywordSource";
import BookList from "../trendsearch/BookList";

import { bookListData, Book } from "../../../constants/DummyData";

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

      <KeywordChartWrapper>
        <KeywordChart />
      </KeywordChartWrapper>

      <KeywordSourceWrapper>
        <KeywordSource />
      </KeywordSourceWrapper>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 2fr;
  grid-template-areas:
    "book book"
    "chart source";
`;

const BookWrapper = styled.div`
  grid-area: book;
  border: 1px solid black;
  overflow-y: auto;
`;

const KeywordChartWrapper = styled.div`
  grid-area: chart;
  border: 1px solid black;
`;

const KeywordSourceWrapper = styled.div`
  grid-area: source;
  border: 1px solid black;
`;

export default KeywordDetail;
