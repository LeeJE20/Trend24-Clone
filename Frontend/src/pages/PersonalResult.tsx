import styled from "styled-components";
import {
  bookListData,
  Book,
} from "../constants/DummyData/BookListData";
import { useEffect, useState } from "react";

const PersonalResult = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  useEffect(() => {
    setBookList(bookListData);
  }, []);


  return (
    <Container>
      <Title>Q. 선택한 질문...</Title>
      <UserBook>
        <div>유저가 선택한 책</div>

      </UserBook>
      <RecommendBook>
      {bookList.map((li) =>(
        <BookImage src={`https://image.yes24.com/goods/${li.product_id}/XL`}
                alt="Book Cover"/>
      ))}

      </RecommendBook>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 5vh;
  margin: 3% 40% 10px 230px;
  font-weight: bold;
  padding: 50px;
  border: solid 1px black;

`;

const UserBook = styled.div`
  border: solid 1px black;
`;

const RecommendBook = styled.div`
  position: absolute;
  border: solid 1px black;
  height: 100%;
  width: 100%;
  right: -35%;
  top: 10%;

  transform: rotate(-45deg);

  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
`;
const BookImage = styled.img`
  transform: rotate(90deg);

    width: 200px;
    height: auto;
    margin: 0px 60px;
    box-sizing: border-box;
    &:hover{
      border: solid 1px black;

    }
`;



export default PersonalResult;
