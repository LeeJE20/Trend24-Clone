import styled from "styled-components";
import { Book } from "../../../constants/DummyData/BookListData";
import { useNavigate } from "react-router-dom";


interface BookListProps {
  bookList: Book[];
}

const PersonalSearchList = ({bookList}:BookListProps) => {
  const navigate = useNavigate();
  
  const bookClick = () => {
    navigate("/event/personal/result");
  };

  return (
    <Container>
      {bookList.map((li) => (
        <BookImage
          src={`https://image.yes24.com/goods/${li.product_id}/XL`}
          alt="Book Cover"
          onClick={() => bookClick()}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BookImage = styled.img`
    width: 8vw;
    height: auto;
    margin: 10px;
    cursor: pointer;
    &:hover{
      opacity: 0.5;
    }
`;

export default PersonalSearchList;
