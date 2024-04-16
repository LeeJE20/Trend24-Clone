// import React, { useState } from "react";
import styled from "styled-components";

const CategoryList = ({ listData }: { listData: string[] }) => {
  console.log(listData);
  
  return (
    <Container>
      <SearchBox>
        
      </SearchBox>

    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const SearchBox = styled.div`
  border: 1px solid black;
  height: 50px;
`;

export default CategoryList;
