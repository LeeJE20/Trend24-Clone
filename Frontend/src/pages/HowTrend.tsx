import styled from "styled-components";
import KeywordRank from "../components/pages/howtrend/ex/KeywordRank";
import Table from "../components/pages/howtrend/Table";
import { hotTrend } from "../constants/DummyData";
import { useState } from "react";
import KeywordDetail from "../components/pages/howtrend/KeywordDetail";

const HowTrend = () => {
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
    <HowTrendContainer>
      <h1>인기 트렌드</h1>
      <Content>
        {Object.keys(hotTrend).map(
          (date, idx) =>
            (selectedTable === null || selectedTable === idx) && (
              <TableWrapper key={idx}>
                <Table
                  key={idx}
                  header={date}
                  columnList={hotTrend[date]}
                  idx={idx}
                  handleKeyword={handleKeyword}
                  handleTableClick={() => handleTableClick(idx)}
                  keyword={keyword}
                />
              </TableWrapper>
            )
        )}
        {selectedTable !== null && <KeywordDetail keyword={keyword} />}
      </Content>
    </HowTrendContainer>
  );
};

const HowTrendContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 0px 20px 20px 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  overflow: auto;
  
  &:first-child{
    box-shadow: 1px 0px 5px 1px #67676755;
    border-radius: 20px;
  }

  &:last-child{
    box-shadow: 1px 0px 5px 1px #67676755;
    border-radius: 0px 20px 20px 0px;
  }
`;

export default HowTrend;
