import { useState } from "react";
import styled from "styled-components";
import { MainColor } from "../../../constants/Color";
import { FaSearch } from "react-icons/fa";
import { categoryKeywordData } from "../../../constants/DummyData";

interface KeywordFilterProps {
  selectedKeyword: string[];
  onKeywordChange: (keywords: string[]) => void;
  onSearch: () => void;
}

const KeywordFilter = ({ selectedKeyword, onKeywordChange, onSearch }: KeywordFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryClick = (category : string) => {
    setSelectedCategory(category);
  };

  const keywordClick = (keyword : string) => {
    if (selectedKeyword.includes(keyword)) {
      onKeywordChange(selectedKeyword.filter((kw) => kw !== keyword));
    } else {
      onKeywordChange([...selectedKeyword, keyword]);
    }
  };

  return (
    <Container>
      <SelectedKeyword>
        <div className="label">
          선택된 키워드
        </div>
        <div className="keywordList">
          {selectedKeyword && selectedKeyword.map((li, idx) => (
            <div key={idx}># {li}</div>
          ))}
        </div>
        <div className="searchBtn" onClick={onSearch}>
          <div>검색</div>
          <FaSearch />
        </div>
      </SelectedKeyword>
      <Category>
        <div className="label">
          카테고리
        </div>
        <div className="categoryList">
          {Object.keys(categoryKeywordData).map((li, idx) => (
            <div key={idx} onClick={() => categoryClick(li)}>
              {li}
            </div>
          ))}
        </div>
        {/* {props.listData.map((li, idx) => (
          <div key={idx} onClick={() => categoryClick(li)}>{li}</div>
        ))} */}
      </Category>
      <KeywordList>
          {selectedCategory && categoryKeywordData[selectedCategory].map((li, idx) => (
            <KeywordItem key={idx} onClick={() => keywordClick(li)} selected={selectedKeyword.includes(li)}>
              # {li}
            </KeywordItem>
          ))}
      </KeywordList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
  box-sizing: border-box;
  
`;

const SelectedKeyword = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px black;
  justify-items: center;
  .label{
    width: 150px;
    background-color: ${MainColor};
    font-weight: bold;
    font-size: 1.1vw;
    color: white;
    align-content: center;
    text-align: center;
    border-radius: 20px 10px 10px 0px;
    margin-right: 10px;
  }

  .keywordList{    
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    div{
      margin: 0px 5px;
      padding: 10px 15px;
      border-radius: 30px;

      &:hover{
        background-color: gray;
      }
    }
  }

  .searchBtn{
    border: 1px solid black;
    padding: 5px;
    font-size: 3vh;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    cursor: pointer;
    div{
      font-size: 2.5vh;
      margin-right: 10px;
    }

    &:hover{
      background-color: gray;
    }
  }
`;

const Category = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px black;
  .label{
    width: 150px;
    background-color: ${MainColor};
    font-weight: bold;
    font-size: 1.1vw;
    color: white;
    align-content: center;
    text-align: center;
    border-radius: 0px 10px 10px 0px;
    border-bottom: solid 1px white;
    margin-right: 10px;
  }

  .categoryList{
    flex: 1 0 auto;
    align-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    div{
      height: 100%;
      padding: 0px 15px;
      align-content: center;
      border-right: solid 1px black;
      &:hover {
        background-color: #828282;
      }
    }
  }
  
`;

const KeywordList = styled.div`
  flex: 1 0 auto;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const KeywordItem = styled.div<{ selected: boolean }>`
  margin: 0px 5px;
  padding: 10px 15px;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "gray" : "initial")};

  &:hover {
    background-color: gray;
  }
`;


export default KeywordFilter;
