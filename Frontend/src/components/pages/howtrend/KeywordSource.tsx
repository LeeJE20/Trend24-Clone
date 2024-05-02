import styled from "styled-components";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface KeywordProps {
  type: string;
  originData: object;
}

const KeywordSource = (props: KeywordProps) => {
  return (
    <Container>
      <Title>참고</Title>
      <Source>
        <img src={"/public/Image/BrandLogo/" + props.type + ".webp"} />
        <div>{props.type}</div>
      </Source>
      {props.type === "google" && (
        <GoogleData>
          <div className="title">구글 실시간 트렌드</div>
          <img
            className="data"
            src="/public/Image/BrandLogo/googleTrend.webp"
          />
        </GoogleData>
      )}
      {props.type === "youtube" && (
        <YoutubeData>
          <div className="title">IU 'Love wins all' Live Clip</div>
          <iframe src="https://www.youtube.com/embed/ax1csKKQnns?si=Kg46sxjOhLHU4DrY" />
        </YoutubeData>
      )}
      {props.type === "X" && (
        <XData>
          <div className="title">
            ‘귀염 뽀짝’ 외모로 동네 지키는 성동구 반려견 순찰대 ‘호두’
          </div>
          <div className="content">
            작고 깜찍한 포메라니안 강아지가 동네 지킴이 활동하는 모습이
            공개되면서 온라인상에서 화제가 되고 있다.
          </div>
          <a className="link" href="https://www.example.com">
            링크 이동 <FaExternalLinkAlt />
          </a>
        </XData>
      )}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    margin-bottom: 10px;
  }
  div {
    font-size: 2vw;
    font-weight: bold;
  }
`;

const GoogleData = styled.div`
  grid-area: data;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2vw;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .data {
    border: 1px solid black;
    padding: 10px;
    width: 90%;
    height: 70%;
    box-sizing: border-box;
  }
`;

const XData = styled.div`
  grid-area: data;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content {
    font-size: 1vw;
    margin-bottom: 30px;
  }

  .link {
    align-self: last baseline;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`;

const YoutubeData = styled.div`
  grid-area: data;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content {
    font-size: 1vw;
    margin-bottom: 30px;
  }

  .link {
    align-self: last baseline;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`;
export default KeywordSource;
