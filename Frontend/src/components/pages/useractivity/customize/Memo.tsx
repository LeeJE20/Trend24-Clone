import styled from "styled-components";

const Memo = () => {
  return (
    <Container>
      <Title>
        <TitleInput placeholder="제목을 입력해주세요" />
      </Title>
      <Content>
        <MemoInput placeholder="메모를 입력해주세요" />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 100%;
`;

const MemoInput = styled.textarea`
  width: 100%;
  height: 100%;
`;

export default Memo;
