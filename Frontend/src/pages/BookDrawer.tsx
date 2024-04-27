import styled from "styled-components";

const BookDrawer = () => {
  return <BookDrawerContainer>BookDrawer</BookDrawerContainer>;
};

const BookDrawerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default BookDrawer;
