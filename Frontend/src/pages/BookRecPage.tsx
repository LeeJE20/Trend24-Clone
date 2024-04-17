import React from "react";
import CategoryList from "../components/bookRecommendation/CategoryList";
import styled from "styled-components";

const categoryListData = ["건강", "게임", "과학", "금융", "IT", "부동산", "취미 & 레저"];


const BookRecPage = () => {
  return (
  <Body>
    <CategoryListContainer>
      <CategoryList listData={categoryListData}/>
    </CategoryListContainer>
    <CategoryKeywordContainer>

    </CategoryKeywordContainer>
    <BookListContainer>

    </BookListContainer>
  </Body>    
  );
};

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
`; 

const CategoryListContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  background-color: #a85858;
`; 

const CategoryKeywordContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  background-color: #4b8268;
`; 

const BookListContainer = styled.div`
  grid-column: 2 / span 1;
  grid-row: 2 / span 3;
  background-color: #72509a;
`; 

export default BookRecPage;