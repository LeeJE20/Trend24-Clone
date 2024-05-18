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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 20px auto; /* 상하 20px, 좌우 자동 마진으로 중앙 정렬 */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  border-radius: 8px; /* 모서리 둥글게 */
  background-color: #fff; /* 배경 색상 */
  box-sizing: border-box; /* padding, border 포함한 크기 설정 */
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 20px; /* 제목과 내용 사이의 여백 */
`;

const Content = styled.div`
  width: 100%;
  height: 90%;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1.25rem; /* 글자 크기 */
`;

const MemoInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem; /* 글자 크기 */
  resize: none; /* 크기 조절 기능 비활성화 */
`;

export default Memo;
