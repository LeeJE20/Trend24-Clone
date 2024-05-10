import styled from "styled-components";
import { useState, useEffect } from "react";
import KeywordCalendar from "./KeywordCalendar";
import KeywordSource from "./KeywordSource";
import BookList from "../trendsearch/BookList";
import {
  bookListData,
  Book,
  PageInfo,
} from "../../../constants/DummyData/BookListData";
import { referenceData } from "../../../constants/DummyData";
import { getKeywordRanking } from "../../../apis/trendApi";
import { getTrendSearchBooks } from "../../../apis/recommendApi";

interface wordType{
  keywordId: number;
  name: string;
  clickCount:number;
  ranking: number;
}

interface rankingType{
  date: string;
  ranking: number;
}

const KeywordDetail = ({ keyword }: { keyword: wordType }) => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [ranking, setRanking] = useState<rankingType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setBookList(bookListData);
    // console.log("keyword", keyword.keywordId);
    const rankingData = async() =>{
      try{
        return await getKeywordRanking(keyword?.keywordId);
      }catch (error){
        console.log(error);
      }
    }

    const bookData = async() =>{
      try{
        return await getTrendSearchBooks({ keywords: [keyword?.keywordId], page: 1, size: 4 });
      }catch (error){
        console.log(error);
      }
    }

    rankingData().then(res => res.length !== 0? setRanking(res):null);
    console.log("bookData",bookData());
    
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
          title={"# " + keyword?.name}
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
        <KeywordCalendar rankingData={ranking} />
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
  grid-template-rows: 4fr 1fr;
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
