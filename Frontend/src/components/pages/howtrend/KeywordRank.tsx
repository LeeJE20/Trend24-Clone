import styled from "styled-components";
import Table from "./Table";
import KeywordDetail from "./KeywordDetail";
import { hotTrend } from "../../../constants/DummyData";
import { useState } from "react";

const KeywordRank = () => {
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
      {Object.keys(hotTrend).map(
        (date, idx) =>
          (selectedTable === null || selectedTable === idx) && (
            <TableContainer key={idx}>
              <Table
                header={date}
                columnList={hotTrend[date]}
                idx={idx}
                handleKeyword={handleKeyword}
                handleTableClick={() => handleTableClick(idx)}
                keyword={keyword}
              />
            </TableContainer>
          )
      )}
      {selectedTable !== null && <KeywordDetail />}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  display: flex;
  overflow: hidden;
`;

const TableContainer = styled.div`
  overflow: auto;
`;

export default KeywordRank;
