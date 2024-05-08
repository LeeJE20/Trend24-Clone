import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Book, PageInfo } from "../../../constants/DummyData/BookListData";
import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineSave } from "react-icons/md";

interface BookListProps {
  title: string;
  bookList: Book[];
  pageInfo: PageInfo;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const BookList = ({
  title,
  bookList,
  pageInfo,
  onNextPage,
  onPrevPage,
}: BookListProps) => {
  const [expandedBookIndices, setExpandedBookIndices] = useState<boolean[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 토글 함수
  const toggleBookContent = (index: number) => {
    setExpandedBookIndices((prevState) =>
      prevState.map((state, idx) => (idx === index ? !state : state))
    );
  };

  // 초기화 이펙트
  useEffect(() => {
    setExpandedBookIndices(Array(bookList.length).fill(false));
  }, [bookList]);

  // 저장 버튼 클릭 핸들러
  const handleSaveButtonClick = (bookId: number) => {
    console.log(`Save button clicked for bookId ${bookId}`);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <BookListContainer>
        {bookList.map((book: Book, index: number) => (
          <BookContainer key={index}>
            <BookCover
              hovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleSaveButtonClick(book.bookId)}
            >
              <img
                src={`https://image.yes24.com/goods/${book.product_id}/XL`}
                alt="Book Cover"
              />
              {hoveredIndex === index && (
                <div className="saveBtn">
                  <MdOutlineSave /> 저장
                </div>
              )}
            </BookCover>
            <BookInfo>
              <div className="title">{book.product_name}</div>
              {expandedBookIndices[index] ? (
                <div>줄거리 : {book.contents}</div>
              ) : (
                <>
                  <div>가격 : {book.sale_price}</div>
                  <div>유입 검색어 : {book.search_keyword}</div>
                  <div>클릭수 : {book.total_click_count}</div>
                  <div>판매량 : {book.total_order_count}</div>
                  <div>총 판매금액 : {book.total_order_amount}</div>
                  <div>카테고리 : {book.category_name}</div>
                  <div>키워드 : {book.keywords.map((x) => " # " + x)}</div>
                </>
              )}
              <NextBtn onClick={() => toggleBookContent(index)}>
                <GrFormNextLink />
              </NextBtn>
            </BookInfo>
          </BookContainer>
        ))}
      </BookListContainer>
      <Pagination>
        <button onClick={onPrevPage} disabled={pageInfo.page === 1}>
          Prev
        </button>
        <span>
          {pageInfo.page} / {pageInfo.totalPages}
        </span>
        <button
          onClick={onNextPage}
          disabled={pageInfo.page === pageInfo.totalPages}
        >
          Next
        </button>
      </Pagination>
    </Container>
  );
};

// 스타일 컴포넌트
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  width: 100%;
`;

const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  gap: 20px;
  overflow-y: auto;
`;

const BookContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 40%;
  margin: 10px;
  padding: 30px;
  min-width: 450px;
  box-sizing: border-box;
  border: 3px solid #c7d0ff7e;
`;

const BookCover = styled.div<{ hovered: boolean }>`
  width: 30%;
  position: relative;
  cursor: pointer;
  margin-right: 20px;

  img {
    height: fit-content;
    width: 100%;
    min-width: 150px;
    margin-right: 20px;
    transition: filter 0.3s ease-in-out;
    filter: ${({ hovered }) => (hovered ? "brightness(70%)" : "none")};
    border-radius: 0px 10px 10px 0px;
  }

  .saveBtn {
    display: flex;
    background-color: #000000bb;
    font-size: 1.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    border-radius: 20px;
    svg {
      font-size: 2.5rem;
      margin-right: 5px;
    }
  }
`;

const BookInfo = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.8rem;
  .title {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const NextBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 4rem;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #aaa;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export default BookList;
