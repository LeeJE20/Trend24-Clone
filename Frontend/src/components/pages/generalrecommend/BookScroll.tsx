import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger를 따로 가져옵니다.
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { GeneralDummyBookList } from "../../../constants/DummyData/GeneralRecommendDummy";

const BookContainer = styled.div`
  height: 40vmin;
  width: 30vmin;
  min-width: 150px;
  min-height: 200px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1200px;
  background-image: url("/Image/EventPage/GeneralRecommend/generalbackground.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const BookPage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 2%;
  transform-origin: 0% 50%;
`;

const Book = ({
  back,
  bookInfo,
}: {
  back: () => void;
  bookInfo: GeneralDummyBookList[];
}) => {
  const bookPageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const toggleBack = () => {
    back();
  };

  const gotoPersonal = () => {
    navigate("/event/personal");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Book 컴포넌트가 마운트되면 GSAP 및 ScrollTrigger 플러그인을 등록합니다.
    bookPageRefs.current.forEach((page, index) => {
      if (!page) {
        console.log("page is null");
        return; // page가 null이면 다음으로 넘어갑니다.
      }
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 });
      if (index === 11) return false;

      gsap.to(page, {
        rotateY: `-=${180 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 2) * (window.innerHeight * 0.25),
        },
      });

      gsap.to(page, {
        z: index === 0 ? -13 : index,
        scrollTrigger: {
          scrub: 1,
          start: () => (index + 1) * (window.innerHeight * 0.25),
          end: () => (index + 1.5) * (window.innerHeight * 0.25),
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 이 효과가 발생하도록 합니다.

  return (
    <BookContainer>
      {/* 페이지들을 여기에 렌더링합니다. */}
      <BookPage
        ref={(el) => (bookPageRefs.current[0] = el)}
        style={{ backgroundColor: "red" }}
      >
        {bookInfo[0].title}
      </BookPage>
      <BookPage
        ref={(el) => (bookPageRefs.current[1] = el)}
        style={{ backgroundColor: "orange" }}
      />
      <BookPage
        ref={(el) => (bookPageRefs.current[2] = el)}
        style={{ backgroundColor: "yellow" }}
      />
      <button onClick={toggleBack}>돌아가기</button>
      <button onClick={gotoPersonal}>나의 책</button>
    </BookContainer>
  );
};

export default Book;
