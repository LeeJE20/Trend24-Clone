import { useState } from "react";
import styled from "styled-components";
import { MainColor } from "../../../constants/Color";
import { FaSearch } from "react-icons/fa";
import { trendCategoryData } from "../../../constants/DummyData/TrendCategoryData";

interface KeywordFilterProps {
  selectedKeyword: string[];
  onKeywordChange: (keywords: string[]) => void;
  onSearch: () => void;
}

const KeywordFilter = ({
  selectedKeyword,
  onKeywordChange,
  onSearch,
}: KeywordFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  const keywordClick = (keyword: string) => {
    if (selectedKeyword.includes(keyword)) {
      onKeywordChange(selectedKeyword.filter((kw) => kw !== keyword));
    } else {
      onKeywordChange([...selectedKeyword, keyword]);
    }
  };

  return (
    <Container>
      <SelectedKeyword>
        <div className="label">선택된 키워드</div>
        <div className="keywordList">
          {selectedKeyword &&
            selectedKeyword.map((li, idx) => <div key={idx}># {li}</div>)}
        </div>
        <div className="searchBtn" onClick={onSearch}>
          <div>검색</div>
          <FaSearch />
        </div>
      </SelectedKeyword>
      <Category>
        <div className="label">카테고리</div>
        <div className="categoryList">
          {trendCategoryData.map((li, idx) => (
            <div key={idx} onClick={() => categoryClick(li.trendCategoryId)}>
              {li.name}
            </div>
          ))}
        </div>
        {/* {props.listData.map((li, idx) => (
          <div key={idx} onClick={() => categoryClick(li)}>{li}</div>
        ))} */}
      </Category>
      <KeywordList>
        {selectedCategory &&
          trendCategoryData
            .find((data) => data.trendCategoryId === selectedCategory)
            ?.keywords.map((li, idx) => (
              <KeywordItem
                key={idx}
                onClick={() => keywordClick(li.name)}
                selected={selectedKeyword.includes(li.name)}
              >
                # {li.name}
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
  font-size: 2rem;
`;

const SelectedKeyword = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  .label {
    width: 200px;
    padding: 20px 5px;
    background-color: ${MainColor};
    font-weight: bold;
    font-size: 2.3rem;
    color: white;
    align-content: center;
    text-align: center;
    border-radius: 20px 10px 10px 0px;
    margin-right: 10px;
  }

  .keywordList {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    div {
      margin: 0px 5px;
      padding: 10px 15px;
      border-radius: 30px;

      &:hover {
        background-color: gray;
      }
    }
  }

  .searchBtn {
    border: 1px solid black;
    padding: 5px;
    font-size: 2.5rem;
    margin-right: 10px;
    display: flex;
    align-items: center;
    align-self: center;
    cursor: pointer;

    div {
      margin-right: 10px;
    }

    &:hover {
      background-color: gray;
    }
  }
`;

const Category = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  .label {
    min-width: 200px;
    background-color: ${MainColor};
    font-weight: bold;
    font-size: 2.3rem;
    width: 200px;
    padding: 20px 5px;
    color: white;
    align-content: center;
    text-align: center;
    border-radius: 0px 10px 10px 0px;
    border-bottom: solid 1px white;
    margin-right: 10px;
  }

  .categoryList {
    flex: 1 0 auto;
    align-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    div {
      height: 70%;
      padding: 0px 30px;
      align-content: center;
      border-right: solid 2px #bebebe7e;

      &:hover {
        background-color: #828282;
      }
    }
  }
`;

const KeywordList = styled.div`
  flex-grow: 1;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const KeywordItem = styled.div<{ selected: boolean }>`
  margin: 0px 5px;
  padding: 10px 15px;
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "gray" : "initial")};

  &:hover {
    background-color: gray;
  }
`;

export default KeywordFilter;
