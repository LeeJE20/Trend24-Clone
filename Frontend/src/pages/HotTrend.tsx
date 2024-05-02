import styled from "styled-components";
import Table from "../components/pages/hottrend/Table";
import { hotTrend } from "../constants/DummyData";
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
    <HowTrendContainer>
      <h2>인기 트렌드</h2>
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
  border: 1px solid black;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  display: flex;
  overflow: hidden;
`;

const TableWrapper = styled.div`
  overflow: auto;
`;

export default HotTrend;
