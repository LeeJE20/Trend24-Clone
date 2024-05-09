import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface PersonalSearchBoxProps {
  onSearchClick: () => void;
}


const PersonalSearchBox = ({ onSearchClick }: PersonalSearchBoxProps) => {
  return (
    <Container>
      <SearchContainer>
        <Title>Book</Title>
        <InputBoxContainer>
          <input />
          <FaSearch onClick={onSearchClick} />
        </InputBoxContainer>
      </SearchContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 6rem;
  align-items: center;

  input {
    height: 80px;
    width: 500px;
    margin-right: 20px;
  }
`;

export default PersonalSearchBox;
