import styled from "styled-components";
import PersonalSearchBox from "../components/pages/PersonalRecommend/PersonalSearchBox";
import PersonalSearchList from "../components/pages/PersonalRecommend/PersonalSearchList";
import { useEffect, useState, useRef } from "react";
import { bookListData, Book } from "../constants/DummyData/BookListData";
import { gsap } from "gsap";

const PersonalSearch = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [isSearchBoxMoved, setIsSearchBoxMoved] = useState<boolean>(false);
  const searchBoxRef = useRef(null);
  const searchListRef = useRef(null);
  const circleRef = useRef(null);
  console.log(isSearchBoxMoved);

  const handleSearchClick = () => {
    // if (!isSearchBoxMoved) {
    setIsSearchBoxMoved(true);
    gsap.to(searchBoxRef.current, { x: "-3%", duration: 0.5 });
    gsap.from(searchListRef.current, { x: "100%", duration: 1.2, ease: "back.out(1)"});
    gsap.from(circleRef.current, { x: "50%", duration: 1.2, ease: "back.out(1)" });
    // }
  };

  useEffect(() => {
    setBookList(bookListData);
  }, []);

  return (
    <Container>
      <SearchWrapper ref={searchBoxRef}>
        <PersonalSearchBox onSearchClick={handleSearchClick} />
      </SearchWrapper>
      <BookListWrapper ref={searchListRef} $isVisible={isSearchBoxMoved}>
        <PersonalSearchList bookList={bookList} />
      </BookListWrapper>
      <Background ref={circleRef} $isVisible={isSearchBoxMoved}></Background>
    </Container>
  );
};

const Container = styled.div`
  @font-face {
    font-family: "Chosunilbo_myungjo";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: Chosunilbo_myungjo;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  /* transform: rotate(10deg); */
  background-image: url("/public/Image/EventPage/bg.jpg");
  background-repeat: repeat;
  align-items: center;
  color: white;
  overflow: hidden;
  position: relative;
`;

const SearchWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const BookListWrapper = styled.div<{ $isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;

  display: ${(props) => {
    console.log(props);
    // console.log(props.);

    return props.$isVisible ? "visible" : "hidden";
  }};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 3;
`;

const Background = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  right: -22%;
  width: 60%;
  height: 130%;
  border-radius: 100% 0 0 100%;
  background: linear-gradient(to left, #4e4e4ec0, #e3e3e3c0, #ffffffc0);
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 1;
  overflow: hidden;
`;

export default PersonalSearch;
