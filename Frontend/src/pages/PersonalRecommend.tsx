import styled from "styled-components";
import { PersonalRecommendData } from "../constants/DummyData/PersonalRecommendData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/pages/PersonalRecommend/QuestionCard";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const PersonalRecommend = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const cards = gsap.utils.toArray(".card");
    cards.forEach((layer: any) => {
      const startX = gsap.getProperty(layer, "x");
      const startY = gsap.getProperty(layer, "y");
      const randomX = gsap.utils.random(-10, 10);
      const randomY = gsap.utils.random(-10, 10);
      tl.to(
        layer,
        {
          x: Number(startX) + randomX,
          y: Number(startY) + randomY,
          duration: 3,
          ease: "power1.inOut",
        },
        0
      );
    });
  }, []);

    useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title",
        start: "top top",
        endTrigger: ".image_container",
        end: "bottom bottom",
        markers: true,
        scrub: 4,
      },
    });
    const cards = gsap.utils.toArray(".card");
    cards.forEach((layer: any) => {
      const startY = gsap.getProperty(layer, "y");
      const startX = gsap.getProperty(layer, "x");
      tl.to(
        layer,
        { x: Number(startX) - 20, y: Number(startY) - 200, ease: "none" },
        0
      );
    });
  }, []);

  // 스크롤 애니메이션
  // useGSAP(() => {
  //   const tl = gsap.timeline(
  //   {scrollTrigger: {
  //     trigger: ".title",
  //     start: "top top",
  //     endTrigger: ".image_container",
  //     end: "bottom bottom",
  //     markers: true,
  //     scrub: 4,
  //   }}
  //   );

  //   const cards = gsap.utils.toArray(".card");
  //   cards.forEach((layer: any) => {
  //     const startY = gsap.getProperty(layer, "y");
  //     const startX = gsap.getProperty(layer, "x");
  //     tl.to(layer, { x:  Number(startX) - 20, y: Number(startY) - 200, ease: "none" }, 0);
  //   });
  // });

  // useGSAP(() => {
  //   const tl = gsap.timeline({ repeat: -1, yoyo: true });

  //   const cards = gsap.utils.toArray(".card");
  //   cards.forEach((layer: any) => {
  //     const startX = gsap.getProperty(layer, "x");
  //     const startY = gsap.getProperty(layer, "y");

  //     const randomX = gsap.utils.random(-10, 10); // X축 랜덤 이동값
  //     const randomY = gsap.utils.random(-10, 10); // Y축 랜덤 이동값

  //     tl.to(
  //       layer,
  //       {
  //         x: Number(startX) + randomX,
  //         y: Number(startY) + randomY,
  //         duration: 3,
  //         ease: "power1.inOut",
  //       },
  //       0
  //     );
  //   });
  // });

  const cardClick = (idx: number) => {
    console.log(idx);
    navigate("/event/personal/search");
  };

  return (
    <Container>
      <Title className="title">당신의 기억 속에 있는<br/>책을 꺼내보세요.</Title>
      <CardContainer className="image_container">
        {PersonalRecommendData.map((li, idx) => (
          <QuestionCard key={idx} cardClick={cardClick} cardData={li} idx={idx} />
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 80px;
  font-weight: bold;
  text-align: center;
  align-content: center;

  z-index: 1;
  overflow-x: hidden;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  /* transform: rotate(10deg); */
  background-image: url("/public/Image/EventPage/bg.jpg");
  background-repeat: repeat;
  background-color: antiquewhite;
`;

const Box = styled.div`
  width: 300px;
  height: 400px;
  border: solid 1px black;
  padding: 50px 30px;
  background-image: linear-gradient(to bottom right, #9ce4d6, white);
  overflow: hidden;
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* transform: rotate(-10deg); */
  margin: 5%;
  box-sizing: border-box;
  border-radius: 30px;
  opacity: 0.7;

  box-shadow: vinset 0px 0px 10px rgba(0, 0, 0, 0.8); /* 안쪽 그림자 추가 */

  overflow: hidden;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .quote {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
  }

  .img {
    width: 160%;
    right: -40%;
    bottom: -30%;
    z-index: -10;
    opacity: 0.3;
  }

  &:nth-child(2n) {
    margin-top: 10px;
    background-image: linear-gradient(to bottom right, #e6cbac, white);
  }

  &:nth-child(3n) {
    margin-top: 10%;
  }
`;

export default PersonalRecommend;
