import { useEffect, useState } from "react";
import styled from "styled-components";
import KeywordFilter from "../components/pages/trendsearch/KeywordFilter";
import BookList from "../components/pages/trendsearch/BookList"; 

import {
  bookListData,
  Book,
} from "../constants/DummyData";

const TrendSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string[] >([]);


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
         <KeywordFilter selectedKeyword={selectedKeyword} onKeywordChange={handleKeywordChange} onSearch={handleSearch}/>
      </FilterContainer>
      <BookListContainer>
        <BookList bookList={bookList}/>
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

  /* display: grid;
  grid-template-columns: 1fr 3.5fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "c k k"
    "c b b";
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
*/
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


// const CategoryListContainer = styled.div`
//   grid-area: c;
//   background-color: #ffffff;
//   box-shadow: 1px 0px 5px 1px #67676755;
//   border-radius: 20px;
// `;

// const CategoryKeywordContainer = styled.div`
//   grid-area: k;
//   background-color: #ffffff;
//   box-shadow: 1px 0px 5px 1px #67676755;
//   border-radius: 20px;
// `;

// const BookListContainer = styled.div`
//   grid-area: b;
//   background-color: #ffffff;
//   box-shadow: 1px 0px 5px 1px #67676755;
//   border-radius: 20px;
//   overflow-y: auto;
// `;

export default TrendSearch;
