import { useState } from "react";
import styled from "styled-components";
import { bookCategoryData } from "../../../constants/DummyData/BookCategoryData";

const BookFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handleCategoryClick = (idx: number) => {
    setSelectedCategory(idx);
  };
  return (
    <Container>
      <Search></Search>
      <Category>
        <div className="label">카테고리</div>
        <div className="content">
          {bookCategoryData.map((li: string, idx: number) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(idx)}
              className={selectedCategory === idx ? "selected" : ""}
            >
              {li}
            </div>
          ))}
        </div>
      </Category>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

const Search = styled.div`
  border: 1px solid black;
  height: 40%;
`;

const Category = styled.div`
  border: 1px solid black;
  height: 60%;
  display: flex;
  .label {
    border: 1px solid black;
    min-width: 10%;
    font-size: 1.5vw;
    text-align: center;
    align-content: center;
  }
  .content {
    border: 1px solid black;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    div {
      font-size: 15px;
      padding: 5px 15px;
      margin: 5px;
      background-color: #ededed;
      border-radius: 15px;
      align-content: center;
      &:hover {
        background-color: #cacaca;
      }
      &.selected {
        background-color: gray;
        color: white;
      }
    }
  }
`;

export default BookFilter;
