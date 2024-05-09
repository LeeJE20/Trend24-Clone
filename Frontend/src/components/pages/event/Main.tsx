import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Main = () => {
  const [isGeneralRecommend, setIsGeneralRecommend] = useState<boolean>(true);
  const Sample1Ref = useRef(null);
  const Sample2Ref = useRef(null);
  const ContentContainerRef = useRef(null); // ContentContainer에 대한 참조 생성
  const PresentBarRef = useRef(null);
  const RemainBarRef = useRef(null);
  const GeneralRecBarRef = useRef(null);
  const PersonalRecBarRef = useRef(null);

  useEffect(() => {
    // 샘플 애니메이션
    if (isGeneralRecommend) {
      gsap.to(Sample1Ref.current, {
        keyframes: {
          "0%": { scale: 1, opacity: 0 },
          "10%": { scale: 0.5, opacity: 0.1, y: 300 },
          "20%": { scale: 1.2, opacity: 0.2, y: 100 },
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
      gsap.to(PersonalRecBarRef.current, {
        keyframes: {
          "0%": { x: "100%", opacity: 0 },
          "100%": { x: 0, opacity: 1 },
        },
      });
    } else {
      gsap.to(GeneralRecBarRef.current, {
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
          <GeneralContent>
            <Text>
              <h1>General Recommend</h1>
              <button onClick={gotoGeneral}>+</button>
            </Text>
            <Img>
              <SampleImg1 ref={Sample1Ref} />
            </Img>
          </GeneralContent>
        ) : (
          <PersonalContent>
            <Text>
              <h1>Personal Recommend!!</h1>
              <button onClick={gotoPersonal}>+</button>
            </Text>
            <Img>
              <SampleImg2 ref={Sample2Ref} />
            </Img>
          </PersonalContent>
        )}
      </ContentContainer>
      <RecommendBarArea>
        <PresentRecommendBar
          $isGeneralRecommend={isGeneralRecommend}
          ref={PresentBarRef}
        >
          {isGeneralRecommend ? (
            <GeneralRecBar
              ref={GeneralRecBarRef}
              onClick={handleGeneralRecommend}
            >
              General
            </GeneralRecBar>
          ) : (
            <PersonalRecBar
              ref={PersonalRecBarRef}
              onClick={handlePersonalRecommend}
            >
              Personal
            </PersonalRecBar>
          )}
        </PresentRecommendBar>
        <RemainRecommendBar
          $isGeneralRecommend={isGeneralRecommend}
          ref={RemainBarRef}
        >
          {isGeneralRecommend ? (
            <PersonalRecBar
              ref={PersonalRecBarRef}
              onClick={handlePersonalRecommend}
            >
              Personal
            </PersonalRecBar>
          ) : (
            <GeneralRecBar
              ref={GeneralRecBarRef}
              onClick={handleGeneralRecommend}
            >
              General
            </GeneralRecBar>
          )}
        </RemainRecommendBar>
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
  overflow: hidden;
`;

interface IsGeneralRecommendProps {
  $isGeneralRecommend: boolean;
}

const ContentContainer = styled.div<IsGeneralRecommendProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$isGeneralRecommend ? "#fec2c2" : "#0e3b62"};
  transition: background-color 1.5s ease; // 배경색 전환에 대한 CSS 트랜지션 추가
`;

const GeneralContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  width: 80%;
  height: 60%;
`;

const PersonalContent = styled.div`
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

const PresentRecommendBar = styled.div<IsGeneralRecommendProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$isGeneralRecommend ? "#ffaeae" : "#093760"};
  transition: background-color 1.5s ease; // 배경색 전환에 대한 CSS 트랜지션 추가
  z-index: 10;
`;
const RemainRecommendBar = styled.div<IsGeneralRecommendProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.$isGeneralRecommend ? "#0e3b62" : "#fec2c2"};
  transition: background-color 1.5s ease; // 배경색 전환에 대한 CSS 트랜지션 추가
  z-index: 8;
`;

const GeneralRecBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const PersonalRecBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export default Main;
