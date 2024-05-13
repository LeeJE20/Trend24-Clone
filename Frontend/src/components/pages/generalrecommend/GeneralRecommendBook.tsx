import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { GeneralDummyBookList } from "../../../constants/DummyData/GeneralRecommendDummy";
import { GeneralDummyBookListData } from "../../../constants/DummyData/GeneralRecommendDummy";

const GeneralRecommendBook = () => {
  const location = useLocation();
  const [title, setTitle] = useState<string>("");
  const [bookList, setBookList] = useState<GeneralDummyBookList[]>([]);
  const bookContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      //       스크롤은 viewheight의 2배만큼 움직임
      // 1080의 경우 2160

      // 결국 가로로 움직임은 0부터 100사이
      // 이걸 가지고 나눠줄 수를 구해줘야 함.

      // viewHeight * 2 / 100 -> 스크롤 움직임 가능 횟수

      // (-1 * verticalScrollPosition) / 18
      // -> 18에 해당 하는 값이
      // viewHeight * 2 / 100
      // 이 값보다 작아야 함.

      // floor 해주면 될듯
      const verticalScrollPosition = window.scrollY; // 수직 스크롤 위치를 가져옵니다.
      const viewHeight = window.innerHeight; // 브라우저 화면의 높이를 가져옵니다.
      const horizontalScrollPosition =
        (-1 * verticalScrollPosition) / Math.floor((viewHeight * 2) / 100);
      if (bookContainerRef.current !== null) {
        if (horizontalScrollPosition < -100) {
          // 가로 스크롤 위치가 -100vw 미만이면, -100vw로 고정합니다.
          bookContainerRef.current.style.transform = `translateX(-100vw)`;
        } else if (horizontalScrollPosition < 0) {
          // 가로 스크롤 위치가 0vw 미만이면, 0vw로 고정합니다.
          bookContainerRef.current.style.transform = `translateX(${horizontalScrollPosition}vw)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트를 등록합니다.

    return () => {
      window.removeEventListener("scroll", handleScroll); // 컴포넌트가 언마운트될 때, 스크롤 이벤트를 제거합니다.
    };
  }, []);

  useEffect(() => {
    setTitle(location.state.title);
    setBookList(GeneralDummyBookListData);
  }, [location.state.title]);

  const showDetail = () => {
    console.log("show detail");
    // 책 디테일 보여줘야됨
    // 페이지 넘기는 효과
  };

  return (
    <Con>
      <Container>
        <WordContainer>
          {title}
          word cloud
        </WordContainer>
        <Section>
          <StyledBookContainer ref={bookContainerRef}>
            {bookList.map((book) => (
              <Book key={book.title}>
                <BookImg>
                  <img src="https://via.placeholder.com/150" alt="book" />
                </BookImg>
                <TextArea>
                  <div>{book.title}</div>
                  <div>{book.keyword1}</div>
                  <div>{book.keyword2}</div>
                  <div>{book.keyword3}</div>
                  <button
                    onClick={() => {
                      showDetail();
                    }}
                  >
                    상세보기
                  </button>
                </TextArea>
              </Book>
            ))}
          </StyledBookContainer>
        </Section>
      </Container>
    </Con>
  );
};
const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300vh;
  contain: paint;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #ebf4fc;
  box-sizing: border-box;
  contain: paint;
`;

const WordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
`;

const Section = styled.div`
  contain: paint;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
`;

// forwardRef를 사용하여 ref를 전달
// const BookContainer = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
//   ({ children }, ref) => (
//     <StyledBookContainer ref={ref}>{children}</StyledBookContainer>
//   )
// );

const StyledBookContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100vw;
  box-sizing: border-box;
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 50vh;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const BookImg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GeneralRecommendBook;
