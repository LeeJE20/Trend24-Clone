// LoadingScreen.tsx
import React from "react";
import styled from "styled-components";
import gsap from "gsap"
// import { useGSAP, MotionPathPlugin } from "@gsap/react";

// gsap.registerPlugin(MotionPathPlugin); 

const LoadingScreen = () => {
  // useGSAP(()=>{
  //   gsap.to(".img", {
  //     motionPath: {
  //       path: "#path",
  //     },
  //     transformOrigin: "50% 50%",
  //     duration: 5,
  //   });
  // })
  return (
    <Container className="loading-screen">
      <img className="img" src="Image/Logo/gifLogo2.gif" />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/Image/EventPage/bg.jpg");
  background-repeat: repeat;
`;

export default LoadingScreen;
