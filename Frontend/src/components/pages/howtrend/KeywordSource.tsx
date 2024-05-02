import styled from "styled-components";
import { useState } from "react";

interface KeywordProps {
  type: string;
  originData: object;
}

const KeywordSource = (props: KeywordProps) => {
  return (
    <Container>
      <Title>참고</Title>
      {props.type === "google" && (
        <>
          <Source>출처</Source>
          <OriginData>데이터</OriginData>
        </>
      )}

      {props.type === "youtube" && (
        <>
          <Source>출처</Source>
          <OriginData>데이터</OriginData>
        </>
      )}

      {props.type === "X" && (
        <>
          <Source>
            X
            <img src="" />
          </Source>
          <OriginData>데이터</OriginData>
        </>
      )}
      <Source>
        {props.type}
        <img src="" />
      </Source>
      <OriginData>데이터</OriginData>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 5fr;
  grid-template-areas:
    "title title"
    "source data";
`;

const Title = styled.div`
  grid-area: title;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Source = styled.div`
  grid-area: source;
  border: 1px solid black;
`;

const OriginData = styled.div`
  grid-area: data;
  border: 1px solid black;
`;

export default KeywordSource;
