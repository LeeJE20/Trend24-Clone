import styled from "styled-components";
import { Book } from "../../../constants/DummyData/BookListData";


interface BookListProps {
  bookList: Book[];
}

const PersonalSearchList = ({bookList}:BookListProps) => {
  console.log(bookList);

  return (
    <Container>
      {bookList.map((li) =>(
        <BookImage src={`https://image.yes24.com/goods/${li.product_id}/XL`}
                alt="Book Cover"/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BookImage = styled.img`
    width: 100px;
    height: auto;
    margin: 10px;
`;

export default PersonalSearchList;
