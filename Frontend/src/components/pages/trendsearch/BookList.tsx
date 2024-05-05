import { useEffect, useState } from "react";
import styled from "styled-components";
import { Book } from "../../../constants/DummyData/BookListData";
import { Mobile, Tablet } from "../../../constants/Display";
import { GrFormNextLink } from "react-icons/gr";

interface BookProps {
  title: string;
  bookList: Book[];
}

const BookList = (prop: BookProps) => {
  const [expandedBookIndices, setExpandedBookIndices] = useState<boolean[]>([]);

  const toggleBookContent = (index: number) => {
    console.log(prop.bookList);
    console.log(expandedBookIndices);

    setExpandedBookIndices((prevState) =>
      prevState.map((state, idx) => (idx === index ? !state : state))
    );
  };

  useEffect(() => {
    setExpandedBookIndices(Array(prop.bookList.length).fill(false));
  }, [prop.bookList]);
  return (
    <Container>
      <Title>{prop.title}</Title>
      <BookListContainer>
        {prop.bookList.map((book: Book, index: number) => (
          <BookContainer key={index}>
            <img
              src={`https://image.yes24.com/goods/${book.product_id}/XL`}
            ></img>
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
    </Container>
  );
};

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
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const BookContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 40%;

  margin: 10px;
  padding: 10px;

  min-width: 450px;
  align-items: center;

  box-sizing: border-box;

  img {
    width: 30%;
    height: fit-content;
    min-width: 150px;
    margin-right: 20px;
  }
`;

const BookInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-shadow: 1px 0px 5px 1px #67676755;
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

export default BookList;
