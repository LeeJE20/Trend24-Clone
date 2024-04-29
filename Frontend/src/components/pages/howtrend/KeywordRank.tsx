import styled from "styled-components";
import Table from "../../common/table/Table";

const KeywordRank = () => {
  return (
    <ATrendKeywordContainer>
      <Table />
    </ATrendKeywordContainer>
  );
};

const ATrendKeywordContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export default KeywordRank;
