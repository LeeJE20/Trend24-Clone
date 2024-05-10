import { useState } from "react";
import styled from "styled-components";
import { bookCategoryData } from "../../../constants/DummyData/BookCategoryData";
import { FaSearch } from "react-icons/fa";

interface BookFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  handleSearch: (searchText: string) => void;
}

const BookFilter = ({
  selectedCategory,
  onCategoryChange,
  handleSearch,
}: BookFilterProps) => {
  const [searchText, setSearchText] = useState("");

  const handleCategoryClick = (category: string) => {
    setSearchText("");
    onCategoryChange(category);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchText); // 검색 함수 호출
  };

  return (
    <Container>
      <Search>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>
          <FaSearch />
        </button>
      </Search>
      <Category>
        <div className="label">카테고리</div>
        <div className="content">
          {bookCategoryData.map((li: string, idx: number) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(li)}
              className={selectedCategory === li ? "selected" : ""}
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
  height: 60%;
  display: flex;

  .label {
    min-width: 120px;
    font-size: 2rem;
    text-align: center;
    align-content: center;
  }
  .content {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    div {
      font-size: 1.3rem;
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
