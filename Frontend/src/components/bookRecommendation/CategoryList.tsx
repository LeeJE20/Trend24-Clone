import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";


interface PropsType {
  listData: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryList = (props:PropsType) => {
  const [searchText, setSearchText] = useState("");

  const DateOptions = [
    { value: "1", name: "지난 1시간" },
    { value: "12", name: "지난 12시간" },
    { value: "24", name: "지난 1일" },
  ];

  const categoryClick = (li : string) => {
    props.setSelectedCategory(li);
  };
  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) =>{
    setSearchText(event.target.value);
    console.log(searchText);
  }


  return (
    <Container>
      <SearchBox>
        <input onChange={handleSearchText}/>
        <button>
          <IoSearchSharp />
        </button>
      </SearchBox>
      <SelectBox>
        {DateOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.name}</option>
        ))}
      </SelectBox>
      <Category>
        {props.listData.map((li, idx) => (
          <div key={idx} onClick={() => categoryClick(li)}>{li}</div>
        ))}
      </Category>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 30px;
`;

const SearchBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 15px;
  margin-bottom: 10px;
  input {
    height: 100%;
    width: 80%;
    border-radius: 15px;
    background-color: transparent;
    border: none;
    padding: 3% 8%;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: transparent;
    font-size: 100%;
    height: 100%;
    width: 20%;
  }
`;

const SelectBox = styled.select`
  display: flex;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Category = styled.div`

  div{
    padding: 10px;
    font-size: 20px;
    text-align: center;
    border-top: solid 1px gray;
    width: inherit;
    box-sizing: border-box;
  }
`;

export default CategoryList;
