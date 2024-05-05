import { useState } from "react";
import styled from "styled-components";
import { bookCategoryData } from "../../../constants/DummyData/BookCategoryData";
import { FaSearch } from "react-icons/fa";


const BookFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handleCategoryClick = (idx: number) => {
    setSelectedCategory(idx);
  };
  return (
    <Container>
      <Search>
        <input type="text" />
        <button>
          <FaSearch />
        </button>
      </Search>
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
  width: 100%;
  display: flex;
  box-sizing: border-box;
  input {
    height: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    text-align: right;
  }
  button {
    height: 100%;
    min-width: 50px;
    box-sizing: border-box;
    font-size: 3rem;
    justify-content: center;
  }
`;

const Category = styled.div`
  border: 1px solid black;
  height: 60%;
  display: flex;

  .label {
    border: 1px solid black;
    min-width: 120px;
    font-size: 2.5rem;
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
      font-size: 1.7rem;
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
