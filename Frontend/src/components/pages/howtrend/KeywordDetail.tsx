import styled from "styled-components";
import { useState } from "react";

const KeywordDetail = () => {
  return (
    <Container>
      <BookContainer>BookContainer</BookContainer>
      <KeywordChart>KeywordChart</KeywordChart>
      <KeywordSource>KeywordSource</KeywordSource>
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

const BookContainer = styled.div`
  grid-area: book;
  border: 1px solid black;
`;

const KeywordChart = styled.div`
  grid-area: chart;
  border: 1px solid black;
`;

const KeywordSource = styled.div`
  grid-area: source;
  border: 1px solid black;
`;

export default KeywordDetail;
