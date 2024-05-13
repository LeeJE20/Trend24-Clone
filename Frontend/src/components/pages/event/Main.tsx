import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [isGeneralRecommend, setIsGeneralRecommend] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleGeneralRecommend = () => {
    setIsGeneralRecommend(true);
  };

  const handlePersonalRecommend = () => {
    setIsGeneralRecommend(false);
  };

  const gotoGeneral = () => {
    navigate("/event/general");
  };

  const gotoPersonal = () => {
    navigate("/event/personal");
  };

  return (
    <Container>
      <ContentContainer $isGeneralRecommend={isGeneralRecommend}>
        {isGeneralRecommend ? (
          <Content>
            <Text>
              <h1>General Recommend</h1>
              <button onClick={gotoGeneral}>+</button>
            </Text>
            <Img>
              <img src="/images/book.png" alt="book" />
            </Img>
          </Content>
        ) : (
          <Content>
            <Text>
              <h1>Personal Recommend!!</h1>
              <button onClick={gotoPersonal}>+</button>
            </Text>
            <Img>
              <img src="/images/book.png" alt="book" />
            </Img>
          </Content>
        )}
      </ContentContainer>
      <RecommendBar>
        {isGeneralRecommend ? (
          <>
            <GeneralRecommendBar>
              <h1>일반 추천</h1>
              <button onClick={handleGeneralRecommend}>+</button>
            </GeneralRecommendBar>
            <PersonalRecommendBar>
              <h1>맞춤 추천</h1>
              <button onClick={handlePersonalRecommend}>+</button>
            </PersonalRecommendBar>
          </>
        ) : (
          <>
            <PersonalRecommendBar>
              <h1>맞춤 추천</h1>
              <button onClick={handlePersonalRecommend}>+</button>
            </PersonalRecommendBar>
            <GeneralRecommendBar>
              <h1>일반 추천</h1>
              <button onClick={handleGeneralRecommend}>+</button>
            </GeneralRecommendBar>
          </>
        )}
      </RecommendBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

interface ContentContainerProps {
  $isGeneralRecommend: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$isGeneralRecommend ? "#ebf4fc" : "#f1e2ff"};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  width: 80%;
  height: 60%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const RecommendBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const GeneralRecommendBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: #ebf4fc;
`;

const PersonalRecommendBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: #f1e2ff;
`;

export default Main;
