import styled from "styled-components";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface KeywordProps {
  type: string;
  originData: {
    uri: string;
    contents: string;
  };
}

const KeywordSource = (props: KeywordProps) => {
  return (
    <Container>
      <Title>참고</Title>
      <Content>
        <Source>
          <img src={"/public/Image/BrandLogo/" + props.type + ".webp"} />
          <div>{props.type}</div>
        </Source>
        {props.type === "GoogleTrends" && (
          <GoogleData>
            <div className="title">구글 실시간 트렌드</div>
            <img
              className="data"
              src="/public/Image/BrandLogo/googleTrend.webp"
            />
          </GoogleData>
        )}
        {props.type === "Youtube" && (
          <YoutubeData>
            <div className="title">IU 'Love wins all' Live Clip</div>
            <iframe src="https://www.youtube.com/embed/ax1csKKQnns?si=Kg46sxjOhLHU4DrY" />
          </YoutubeData>
        )}
        {props.type === "X" && (
          <XData>
            <div className="title">{props.originData.contents}</div>
            <div className="content">
              작고 깜찍한 포메라니안 강아지가 동네 지킴이 활동하는 모습이
              공개되면서 온라인상에서 화제가 되고 있다.
            </div>
            <a className="link" href={props.originData.uri}>
              링크 이동 <FaExternalLinkAlt />
            </a>
          </XData>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Content = styled.div`
  display: flex;
`;

const Source = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  img {
    width: 60%;
    min-width: 100px;
    margin: 10px;
  }
  div {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const GoogleData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .data {
    border: solid 1px black;
    padding: 20px;
    width: 60%;
    box-sizing: border-box;
  }
`;

const XData = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .link {
    font-size: 2rem;
    align-self: last baseline;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
`;

const YoutubeData = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content {
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;
export default KeywordSource;
