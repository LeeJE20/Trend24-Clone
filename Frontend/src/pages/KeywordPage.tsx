import styled from "styled-components";

import ATrendKeyword from "../components/Keyword/ATrendKeyword";
import RTPKeyword from "../components/Keyword/RTPKeyword";
import STKeyword from "../components/Keyword/STKeyword";

const KeywordPage = () => {
  return (
    <KeywordPageContainer>
      <RTPKeyword />
      <ATrendKeyword />
      <STKeyword />
    </KeywordPageContainer>
  );
};

const KeywordPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default KeywordPage;
