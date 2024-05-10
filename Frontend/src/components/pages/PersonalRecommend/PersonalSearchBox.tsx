import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface PersonalSearchBoxProps {
  onSearchClick: () => void;
}


const PersonalSearchBox = ({ onSearchClick }: PersonalSearchBoxProps) => {
  return (
    <Container>
      <SearchContainer>
        <Title>당신의 기억 속에 있는 책을 열어보세요.</Title>
        <Card>내 인생의 터닝포인트가 된 책을 한 권 꼽는다면 어떤 책을 선택하고 싶나요?</Card>
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
  font-size: 4rem;
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

const Card = styled.div`

`;

export default PersonalSearchBox;
