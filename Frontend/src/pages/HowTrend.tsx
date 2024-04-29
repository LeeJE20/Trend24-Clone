import styled from "styled-components";
import KeywordRank from "../components/pages/howtrend/KeywordRank";
import Table from "../components/common/table/Table";

const HowTrend = () => {
  return (
    <HowTrendContainer>
      <h2>인기 트렌드</h2>
      <KeywordRank />
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

export default HowTrend;
