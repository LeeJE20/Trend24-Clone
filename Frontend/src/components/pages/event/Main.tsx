import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Main = () => {
  const [isGeneralRecommend, setIsGeneralRecommend] = useState<boolean>(true);
  const Sample1Ref = useRef(null);
  const Sample2Ref = useRef(null);
  const ContentContainerRef = useRef(null); // ContentContainer에 대한 참조 생성
  const GeneralRecommendBarRef = useRef(null); // GeneralRecommendBar에 대한 참조 생성
  const PersonalRecommendBarRef = useRef(null); // PersonalRecommendBar에 대한 참조 생성

  useEffect(() => {
    // 샘플 애니메이션
    if (isGeneralRecommend) {
      gsap.to(Sample1Ref.current, {
        keyframes: {
          "0%": { scale: 1, opacity: 0 },
          "10%": { scale: 0.5, opacity: 0.1, y: 500 },
          "20%": { scale: 1.2, opacity: 0.2, y: 200 },
          "100%": { scale: 1, opacity: 1, y: 0 },
        },
        duration: 1.5,
      });
    } else {
      gsap.to(Sample2Ref.current, {
        keyframes: {
          "0%": { scale: 1, opacity: 0 },
          "10%": { scale: 0.5, opacity: 0.5 },
          "20%": { scale: 1.2, opacity: 0.8 },
          "100%": { scale: 1, opacity: 1 },
        },
        duration: 1.5,
      });
    }

    // 배경색 변경 애니메이션
    if (ContentContainerRef.current) {
      gsap.to(ContentContainerRef.current, {
        backgroundColor: isGeneralRecommend ? "#ebf4fc" : "#f1e2ff",
        duration: 1.5,
      });
    }

    // RecommendBarArea의 자식들의 위치를 바꾸는 애니메이션
    if (isGeneralRecommend) {
      gsap.to(GeneralRecommendBarRef.current, {
        keyframes: {
          "0%": { x: "100%" },
          "100%": { x: 0 },
        },
      });
      gsap.to(PersonalRecommendBarRef.current, {
        keyframes: {
          "0%": { x: "-100%" },
          "100%": { x: 0 },
        },
      });
    } else {
      gsap.to(GeneralRecommendBarRef.current, {
        keyframes: {
          "0%": { x: "-100%" },
          "100%": { x: 0 },
        },
      });
      gsap.to(PersonalRecommendBarRef.current, {
        keyframes: {
          "0%": { x: "100%" },
          "100%": { x: 0 },
        },
      });
    }
  }, [isGeneralRecommend]);

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
      <ContentContainer
        ref={ContentContainerRef}
        $isGeneralRecommend={isGeneralRecommend}
      >
        {isGeneralRecommend ? (
          <Content>
            <Text>
              <h1>General Recommend</h1>
              <button onClick={gotoGeneral}>+</button>
            </Text>
            <Img>
              <SampleImg1 ref={Sample1Ref} />
            </Img>
          </Content>
        ) : (
          <Content>
            <Text>
              <h1>Personal Recommend!!</h1>
              <button onClick={gotoPersonal}>+</button>
            </Text>
            <Img>
              <SampleImg2 ref={Sample2Ref} />
            </Img>
          </Content>
        )}
      </ContentContainer>
      <RecommendBarArea>
        {isGeneralRecommend ? (
          <>
            <GeneralRecommendBar ref={GeneralRecommendBarRef}>
              <h1>일반 추천</h1>
              <button onClick={handleGeneralRecommend}>+</button>
            </GeneralRecommendBar>
            <PersonalRecommendBar ref={PersonalRecommendBarRef}>
              <h1>맞춤 추천</h1>
              <button onClick={handlePersonalRecommend}>+</button>
            </PersonalRecommendBar>
          </>
        ) : (
          <>
            <PersonalRecommendBar ref={PersonalRecommendBarRef}>
              <h1>맞춤 추천</h1>
              <button onClick={handlePersonalRecommend}>+</button>
            </PersonalRecommendBar>
            <GeneralRecommendBar ref={GeneralRecommendBarRef}>
              <h1>일반 추천</h1>
              <button onClick={handleGeneralRecommend}>+</button>
            </GeneralRecommendBar>
          </>
        )}
      </RecommendBarArea>
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

const SampleImg1 = styled.div`
  width: 200px;
  height: 200px;
  background: url(http://placehold.it/200x200) no-repeat center center;
  background-size: cover;
`;

const SampleImg2 = styled.div`
  width: 200px;
  height: 200px;
  background: url(http://placehold.it/200x200) no-repeat center center;
  background-size: cover;
`;

const RecommendBarArea = styled.div`
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
