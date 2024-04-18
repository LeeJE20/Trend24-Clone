// import React from "react";
import styled from "styled-components";
import { categoryKeywordData } from "../../constants/DummyData";

const CategoryKeyword = () => {
  return (
    <Container>
      <Title>IT</Title>
      <Keyword>
        {categoryKeywordData.map((data, idx) => {
          return <div key={idx}># {data}</div>;
        })}
      </Keyword>
      <KeywordSourceBtn />
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    font-size: 20px;
    margin-right: 20px;
  }
`;

const KeywordSourceBtn = styled.div``;

export default CategoryKeyword;
