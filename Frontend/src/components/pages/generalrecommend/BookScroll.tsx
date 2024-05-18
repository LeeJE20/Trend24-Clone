import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger를 따로 가져옵니다.
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface BookInfo {
  bookId: number;
  product_id: number;
  search_keyword: string;
  total_click_count: number;
  total_order_count: number;
  total_order_amount: number;
  contents: string;
  product_name: string;
  sale_price: number;
  category_name: string;
  total_purchase_count: number;
  keywords: string[];
}

const BookContainer = styled.div`
  height: 60vmin;
  width: 45vmin;
  min-width: 150px;
  min-height: 200px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1200px;
`;

const BookPageFrontCover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 2%;
  transform-origin: 0% 50%;
`;

const BookPageBackCover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 2%;
  transform-origin: 100% 50%;
`;

const BookPage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 2%;
  transform-origin: 0% 50%;
  transform-style: preserve-3d;
`;

const PageContent = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: white;
  box-sizing: border-box;
`;

const BookPageFront = styled.div`
  height: 95%;
  width: 95%;
  position: absolute;
  top: 2.5%;
  left: 2%;
  backface-visibility: hidden;
`;

const BookPageBack = styled.div`
  height: 95%;
  width: 95%;
  position: absolute;
  top: 2.5%;
  left: 2%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

interface BookScrollProps {
  back: () => void;
  bookInfo: BookInfo | null;
}

const Book: React.FC<BookScrollProps> = ({ back, bookInfo }) => {
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
      gsap.set(page, { z: index === 0 ? 13 : -index * 1 }); // 페이지의 초기 z축 위치를 설정합니다.
      if (index === 11) return false; // 12페이지까지만 렌더링합니다.

      gsap.to(page, {
        // 페이지를 회전시키는 애니메이션을 추가합니다.
        rotateY: `-=${180 - index / 2}`, // 페이지를 회전시키는 애니메이션을 추가합니다.
        scrollTrigger: {
          // ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션을 제어합니다.
          scrub: 1, // 스크롤 속도에 따라 애니메이션 속도를 조절합니다.
          start: () => (index + 1) * (window.innerHeight / 6), // 애니메이션이 시작되는 스크롤 위치를 설정합니다.
          end: () => (index + 2) * (window.innerHeight / 6), // 애니메이션이 끝나는 스크롤 위치를 설정합니다.
        },
      });

      gsap.to(page, {
        z: index === 0 ? -13 : index, // 페이지의 z축 위치를 변경합니다.
        scrollTrigger: {
          // ScrollTrigger를 사용하여 스크롤 위치에 따라 애니메이션을 제어합니다.
          scrub: 1, // 스크롤 속도에 따라 애니메이션 속도를 조절합니다.
          start: () => (index + 1) * (window.innerHeight / 6), // 애니메이션이 시작되는 스크롤 위치를 설정합니다.
          end: () => (index + 1.5) * (window.innerHeight / 6), // 애니메이션이 끝나는 스크롤 위치를 설정합니다.
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 컴포넌트가 언마운트될 때 ScrollTrigger를 제거합니다.
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 이 효과가 발생하도록 합니다.

  return (
    <BookContainer>
      {/* 페이지들을 여기에 렌더링합니다. */}
      <BookPageFrontCover
        ref={(el) => (bookPageRefs.current[0] = el)}
        style={{
          backgroundImage: `url("https://picsum.photos/200/300")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></BookPageFrontCover>
      <BookPage ref={(el) => (bookPageRefs.current[1] = el)}>
        <BookPageFront style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>{bookInfo?.product_name}</h1>
            <p>카테고리: {bookInfo?.category_name}</p>
            <p>1페이지</p>
          </PageContent>
        </BookPageFront>
        <BookPageBack style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>가격</h1>
            <p>{bookInfo?.sale_price}원</p>
            <p>2페이지</p>
          </PageContent>
        </BookPageBack>
      </BookPage>

      <BookPage ref={(el) => (bookPageRefs.current[2] = el)}>
        <BookPageFront style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>책 소개</h1>
            <p>{bookInfo?.contents}</p>
            <p>3페이지</p>
          </PageContent>
        </BookPageFront>
        <BookPageBack style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>검색어</h1>
            <p>{bookInfo?.search_keyword}</p>
            <p>4페이지</p>
          </PageContent>
        </BookPageBack>
      </BookPage>
      <BookPage ref={(el) => (bookPageRefs.current[3] = el)}>
        <BookPageFront style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>클릭수</h1>
            <p>{bookInfo?.total_click_count}회</p>
            <p>5페이지</p>
          </PageContent>
        </BookPageFront>
        <BookPageBack style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>구매수</h1>
            <p>{bookInfo?.total_order_count}회</p>
            <p>6페이지</p>
          </PageContent>
        </BookPageBack>
      </BookPage>
      <BookPage ref={(el) => (bookPageRefs.current[4] = el)}>
        <BookPageFront style={{ backgroundColor: "white" }}>
          <PageContent>
            <h1>키워드</h1>
            <p>{bookInfo?.keywords.join(", ")}</p>
            <p>7페이지</p>
          </PageContent>
        </BookPageFront>
        <BookPageBack style={{ backgroundColor: "white" }}>
          <PageContent>
            <PageContent>
              <p>The End</p>
              <button onClick={toggleBack}>돌아가기</button>
              <button onClick={gotoPersonal}>나의 책</button>
            </PageContent>
          </PageContent>
        </BookPageBack>
      </BookPage>
      <BookPageBackCover
        ref={(el) => (bookPageRefs.current[5] = el)}
        style={{
          backgroundImage: `url("https://picsum.photos/200/300")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></BookPageBackCover>
    </BookContainer>
  );
};

export default Book;
