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

  console.log(isSearchBoxMoved);
  
  const handleSearchClick = () => {
    setIsSearchBoxMoved(true);
    gsap.to(searchBoxRef.current, { x: "-10%", duration: 0.5 });
    gsap.from(searchListRef.current, { x: "100%", duration: 0.5 });
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
    </Container>
  );
};

const Container = styled.div`
@font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  font-family: Chosunilbo_myungjo;
  display: flex;
  height: 100%;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 70%;
`;
const BookListWrapper = styled.div<{ $isVisible: boolean }>`
  width: 30%;
  display: ${(props) => {
    console.log(props);
    // console.log(props.);
    
    
    return props.$isVisible ? "visible" : "hidden";
  }};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export default PersonalSearch;
