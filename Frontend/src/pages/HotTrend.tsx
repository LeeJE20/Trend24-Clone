import styled from "styled-components";
import Table from "../components/pages/hottrend/KeywordTable";
import { trendKeyword } from "../constants/DummyData/TrendKeywordData";
import { useState } from "react";
import KeywordDetail from "../components/pages/hottrend/KeywordDetail";

const HotTrend = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const handleTableClick = (idx: number) => {
    if (selectedTable == null) {
      setSelectedTable(idx);
    } else {
      setSelectedTable(null);
      setKeyword("");
    }
  };

  const handleKeyword = (key: string) => {
    console.log(key);
    setKeyword(key);
  };

  return (
    <Container>
      <Title>인기 트렌드</Title>
      <Content>
        {trendKeyword.map(
          (list, idx) =>
            (selectedTable === null || selectedTable === idx) && (
              <TableWrapper key={idx}>
                <Table
                  key={idx}
                  header={list.date}
                  columnList={list.words}
                  idx={idx}
                  handleKeyword={handleKeyword}
                  handleTableClick={() => handleTableClick(idx)}
                  keyword={keyword}
                />
              </TableWrapper>
            )
        )}

        {selectedTable !== null && (
          <KeywordDetailWrapper>
            <KeywordDetail keyword={keyword} />
          </KeywordDetailWrapper>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 3vh;
  margin: 20px 10px;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  border-radius: 20px;
`;

const TableWrapper = styled.div`
  overflow: auto;
  margin-right: 5px;
  flex-grow: 1;

  &:first-child {
    box-shadow: 1px 0px 5px 1px #67676755;
  }

  &:last-child {
    box-shadow: 1px 0px 5px 1px #67676755;
  }
`;
const KeywordDetailWrapper = styled.div`
  width: 85%;
`;

export default HotTrend;
