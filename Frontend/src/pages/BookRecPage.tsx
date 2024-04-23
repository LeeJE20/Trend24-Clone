import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryList from "../components/bookRecommendation/CategoryList";
import CategoryKeyword from "../components/bookRecommendation/CategoryKeyword";
import KeywordBookList from "../components/bookRecommendation/KeywordBookList";
import { categoryListData, categoryKeywordData, bookListData, Book } from "../constants/DummyData";
import { Mobile } from "../constants/Display";

const BookRecPage = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string[]>([]);
  const [bookList, setBookList] = useState<Book[]>([]);
  
  useEffect (()=>{
    setCategory(categoryListData);
    setKeyword(categoryKeywordData);
    setBookList(bookListData);
  },[])

  return (
    <Body>
      <CategoryListContainer>
        <CategoryList listData={category} />
      </CategoryListContainer>
      <CategoryKeywordContainer>
        <CategoryKeyword keyword={keyword} />
      </CategoryKeywordContainer>
      <BookListContainer>
        <KeywordBookList bookList={bookList}/>
      </BookListContainer>
    </Body>
  );
};

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "c k k"
    "c b b";
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${Mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "c"
      "k"
      "b";
  }
`;

const CategoryListContainer = styled.div`
  grid-area: c;
  background-color: #ffffff;
  box-shadow: 1px 0px 5px 1px #67676755;
  border-radius: 20px;
`;

const CategoryKeywordContainer = styled.div`
  grid-area: k;
  background-color: #ffffff;
  box-shadow: 1px 0px 5px 1px #67676755;
  border-radius: 20px;
`;

const BookListContainer = styled.div`
  grid-area: b;
  background-color: #ffffff;
  box-shadow: 1px 0px 5px 1px #67676755;
  border-radius: 20px;
  overflow-y: auto;
`;

export default BookRecPage;
