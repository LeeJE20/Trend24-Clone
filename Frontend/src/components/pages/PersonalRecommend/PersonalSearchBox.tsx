import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import QuestionCard from "./QuestionCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getSearchBook } from "../../../apis/anonymous";
import { questionType } from "../../../store/slices/recommendSlice";

interface PersonalSearchBoxProps {
  onSearchClick: (text: string) => void;
}

const PersonalSearchBox = ({ onSearchClick }: PersonalSearchBoxProps) => {
  const [searchBookText, setSearchBookText] = useState<string>("");

  const cardClick = (card: questionType) => {};

  const changeText = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setSearchBookText(value);
  };
  
  const searchClick = () => {
    onSearchClick(searchBookText);
  };

  const cardData: questionType = useSelector(
    (state: RootState) => state.recommend.selectedQuestion
  );

  return (
    <Container>
      <Wrapper>
        <QuestionCard cardClick={cardClick} cardData={cardData} />
        <SearchContainer>
          <Title>
            당신의 기억 속에 있는
            <br />
            책을 열어보세요.
          </Title>
          <InputBoxContainer>
            <input onChange={changeText} value={searchBookText} />
            <FaSearch className="searchBtn" onClick={searchClick} />
          </InputBoxContainer>
        </SearchContainer>
      </Wrapper>
      <HashTag>
        #  좋은 이별 # 긴 이별을 위한 짧은 편지
        <br /> # 어떻게든 이별 # 이별에도 예의가 필요하다
      </HashTag>
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

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 15%;
  color: white;
`;

const Title = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 6rem;
  align-items: center;

  input {
    font-size: 2rem;
    height: 80px;
    width: 100%;
    min-width: 350px;
    margin-right: 10px;
    border-radius: 10px;
    border: 3px solid #e1e1e1e1;
    background-color: #ffffffa2;
    padding: 10px;
    box-sizing: border-box;
  }

  .searchBtn {
    border: 3px solid #e1e1e1e1;
    background-color: #ffffffa2;
    padding: 7px 15px;
    border-radius: 10px;
  }
`;

const HashTag = styled.div`
  padding: 0px 10%;
  font-size: 3rem;
  line-height: 5rem;
`;

export default PersonalSearchBox;
