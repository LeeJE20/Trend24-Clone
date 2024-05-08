import styled from "styled-components";
import { PersonalRecommendData } from "../constants/DummyData/PersonalRecommendData";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const PersonalRecommend = () => {
  const navigate = useNavigate();

  const cards = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    const tl = gsap.timeline(
    {scrollTrigger: {
      trigger: ".title",
      start: "top top",
      endTrigger: ".image_container",
      end: "bottom bottom",
      // animation: tl,
      pin: true,
      pinSpacing: false,
      markers: true,
      scrub: 2,
    }}  
    );
    const cards = gsap.utils.toArray(".card");
    cards.forEach((layer: any) => {
      // const depth = layer.dataset.depth;
      // const movement = -(layer.offsetHeight * depth);
      const startY = gsap.getProperty(layer, "y");
      const startX = gsap.getProperty(layer, "x");

      tl.to(layer, { x:  Number(startX) - 10, y: Number(startY) - 100, ease: "none" }, 0);
      // gsap.to(layer, {
      //   x: Number(startX) - 1000,
      //   y: Number(startY) - 5000,
      //   duration: 100,

      // });
      // loopAnimation(layer, startY);
    });
  });

  // const loopAnimation = (layer:any, startY:any) => {
  //   gsap.to(layer, {
  //     y: Number(startY) - 5000, // 50% 위로 올라가는 애니메이션
  //     duration: 1000,
  //     scrollTrigger: {
  //       trigger: layer,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: true,
  //     },
  //     repeat: -1, // 무한 반복
  //     yoyo: true, // 애니메이션을 왕복 시킴
  //   });
  // }

  const cardClick = (idx:number) => {
    console.log(idx);
    navigate("/event/personal/search");
  }

  return (
    <Container>
      <Title className="title">Q. 질문 뭐시기 어쩌고</Title>
      <BoxContainer className="image_container" ref={cards}>
        {PersonalRecommendData.map((li, idx) => (
          <Box key={idx} className="card" onClick={()=>cardClick(idx)}>
            <div className="content">"{li}"</div>
            <img className="img" src="/public/Image/fold.webp"></img>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  /* padding: 0px 150px 0px 150px; */
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  height: 100%;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  align-content: center;
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  /* z-index: 1;  */
`;

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* padding: 0px 150px; */
  box-sizing: border-box;
  transform: rotate(10deg);
  /* border: solid 1px black; */
`;

const Box = styled.div`
  width: 300px;
  height: 400px;
  border: solid 1px black;
  padding: 30px;
  /* background-image: linear-gradient(to bottom right, #9ce4d6, white); */
  overflow: hidden;
  font-size: 3rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  transform: rotate(-10deg);
  margin: 5%;
  box-sizing: border-box;
  
  overflow: hidden;
  &:hover { 
    cursor: pointer;
  }

  .img {
    width: 160%;
    right: -40%;
    bottom: -30%;
    z-index: -10;
    opacity: 0.3;
  }
`;


export default PersonalRecommend;
