import styled from "styled-components";
import { Book } from "../../constants/DummyData";
import { Tablet } from "../../constants/Display";

const KeywordBookList = ({bookList}: {bookList: Book[]}) => {
  
  return (
    <Container>
      <Title>추천 책 리스트</Title>
      {bookList.map((book: Book, index: number) => (
        <BookContainer key={index}>
          <img src="https://image.yes24.com/goods/96072143/XL"></img>
          <BookInfo>
            <h2>{book.product_name}</h2>
            <div>가격 : {book.sale_price}</div>
            <div>유입 검색어 : {book.search_keyword}</div>
            <div>클릭수 : {book.total_click_count}</div>
            <div>판매량 : {book.total_order_count}</div>
            <div>총 판매금액 : {book.total_order_amount}</div>
            <div>카테고리 : {book.category_name}</div>
          </BookInfo>
        </BookContainer>
    ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%-30px;

`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
  width: 100%;
`;

const BookContainer = styled.div`
  display: flex;
  border: 1px solid black;
  flex: 1 1 50%;
  padding: 10px;
  box-sizing: border-box;

  ${ Tablet } {
    flex: 1 1 100%;
  }
   img{
    width: 30%;
    margin-right: 20px;
   }
`;

const BookInfo = styled.div`
  width: 100%;
  padding: 10px;
    box-shadow: 1px 0px 5px 1px #67676755;
    border-radius: 20px;
  h2{
    font-size: 18px;
  }
`;

export default KeywordBookList;
