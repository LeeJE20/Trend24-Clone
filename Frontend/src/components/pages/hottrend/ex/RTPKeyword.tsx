import styled from "styled-components";

const RTPKeyword = () => {
  return (
    <RTPKeywordContainer>
      <div>RTPKeyword</div>
    </RTPKeywordContainer>
  );
};

const RTPKeywordContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 7;
  grid-row: 1 / 3;
  border: 1px solid #000;
`;

export default RTPKeyword;
