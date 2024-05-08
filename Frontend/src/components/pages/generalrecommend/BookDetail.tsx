import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

// 페이지 컴포넌트 스타일 정의
const Page = styled.div`
  width: 200px;
  height: 300px;
  background-color: lightblue;
  border: 1px solid black;
  position: absolute;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

// useGSAP 커스텀 훅 정의
const useGSAP = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (!animationRef.current) return;

    gsap.fromTo(
      animationRef.current,
      { rotationY: -180 },
      { rotationY: 0, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return animationRef;
};

// 페이지 플립 컴포넌트 정의
const FlipPages = () => {
  const page1Ref = useGSAP();
  const page2Ref = useRef(null);

  return (
    <>
      <Page ref={page1Ref}>Page 1</Page>
      <Page ref={page2Ref} style={{ left: "220px" }}>
        Page 2
      </Page>
      <button
        onClick={() =>
          gsap.to([page1Ref.current, page2Ref.current], {
            rotationY: 180,
            duration: 1,
            ease: "power2.inOut",
          })
        }
      >
        Flip Pages
      </button>
    </>
  );
};

export default FlipPages;
