// import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

const CategoryList = ({ listData }: { listData: string[] }) => {
  console.log(listData);

  return (
    <Container>
      <SearchBox>
        <input />
        <button>
          <IoSearchSharp />
        </button>
      </SearchBox>
      <FilterBox></FilterBox>
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

const FilterBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 15px;
`;

export default CategoryList;
