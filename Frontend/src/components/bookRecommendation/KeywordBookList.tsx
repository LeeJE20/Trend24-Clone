import styled from "styled-components";

const KeywordBookList = () => {
  return (
    <Container>
      <Title>추천 책 리스트</Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export default KeywordBookList;
