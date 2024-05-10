import { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordFilter from "../components/pages/trendsearch/KeywordFilter";
import BookList from "../components/common/book/BookList";
import {
  bookListData,
  PageInfo,
} from "../constants/DummyData/BookListData";
import { getTrendCategories, getTrendSearchBooks } from "../apis/recommendApi";
import { BookType } from "../constants/Type/Type";

interface TrendCategoryDataType {
  trendCategoryId: number;
  name: string;
  keywords: keywords[];
}
interface keywords {
  keywordId: number;
  name: string;
}

const TrendSearch = () => {
  const [bookList, setBookList] = useState<BookType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedKeyword, setSelectedKeyword] = useState<keywords[]>([]);
  const [trendCategoryData, setTrendCategoryData] = useState<
    TrendCategoryDataType[]
  >([]);

  const getTrendCategory = async () => {
    try {
      return await getTrendCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const getBookList = async () => {
    try {
      return await getTrendSearchBooks({
        keywords: selectedKeyword.map((li)=>li.keywordId),
        page: currentPage - 1,
        size: itemsPerPage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendCategory().then((res) => setTrendCategoryData(res));
  }, []);

  const handleKeywordChange = (keywords: keywords[]) => {
    setSelectedKeyword(keywords);
  };

  const handleSearch = () => {
    alert(selectedKeyword);
  };

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
          trendCategoryData={trendCategoryData}
          onKeywordChange={handleKeywordChange}
          onSearch={handleSearch}
        />
      </FilterContainer>
      <BookListContainer>
        <BookList
          bookList={bookList}
          title="추천 책 도서"
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  height: 30px;
  margin: 20px 10px;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  width: 100%;
  min-height: 130px;
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

export default TrendSearch;
