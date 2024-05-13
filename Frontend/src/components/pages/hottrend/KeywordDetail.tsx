import styled from "styled-components";
import { useState, useEffect } from "react";
import KeywordCalendar from "./KeywordCalendar";
import KeywordSource from "./KeywordSource";
import BookList from "../trendsearch/BookList";
import { trendRank } from "../../../constants/DummyData/TrendRankData";
import {
  bookListData,
  Book,
  PageInfo,
} from "../../../constants/DummyData/BookListData";
import { referenceData } from "../../../constants/DummyData";

const KeywordDetail = ({ keyword }: { keyword: string }) => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setBookList(bookListData);
  }, [keyword]);

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
      <BookWrapper>
        <BookList
          bookList={currentItems}
          title={"# " + keyword}
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
      </BookWrapper>

      <KeywordCalendarWrapper>
        <KeywordCalendar rankData={trendRank} />
      </KeywordCalendarWrapper>

      <KeywordSourceWrapper>
        <KeywordSource
          type={referenceData.platform}
          originData={referenceData.data}
        />
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
