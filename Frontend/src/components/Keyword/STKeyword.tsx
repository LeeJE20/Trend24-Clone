import styled from "styled-components";

const STKeyword = () => {
  return (
    <STKeywordContainer>
      <div>STKeyword</div>
    </STKeywordContainer>
  );
};

const STKeywordContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 4 / 7;
  grid-row: 3 / 7;
  border: 1px solid #000;
`;

export default STKeyword;
