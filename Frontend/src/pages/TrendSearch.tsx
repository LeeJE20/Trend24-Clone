import { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryList from "../components/pages/trendsearch/CategoryList";
import CategoryKeyword from "../components/pages/trendsearch/CategoryKeyword";
import KeywordBookList from "../components/pages/trendsearch/KeywordBookList";
import {
  categoryListData,
  categoryKeywordData,
  bookListData,
  Book,
} from "../constants/DummyData";
import { Mobile } from "../constants/Display";

const TrendSearch = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("IT");
  const [keyword, setKeyword] = useState<string[]>([]);
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    setCategory(categoryListData);
    setKeyword(categoryKeywordData);
    setBookList(bookListData);
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
    // 해시태그 api 호출
  }, [selectedCategory]);

  return (
    <Body>
      <CategoryListContainer>
        <CategoryList
          listData={category}
          setSelectedCategory={setSelectedCategory}
        />
      </CategoryListContainer>
      <CategoryKeywordContainer>
        <CategoryKeyword keyword={keyword} category={selectedCategory} />
      </CategoryKeywordContainer>
      <BookListContainer>
        <KeywordBookList bookList={bookList} />
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

export default TrendSearch;
