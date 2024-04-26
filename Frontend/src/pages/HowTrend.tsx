import styled from "styled-components";

const KeywordPage = () => {
  return <KeywordPageContainer></KeywordPageContainer>;
};

const KeywordPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default KeywordPage;
