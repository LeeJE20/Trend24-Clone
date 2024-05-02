import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserCustomizePage = () => {
  const navigate = useNavigate();

  const showEditPage = () => {
    navigate("/main/custom");
  };

  return (
    <Container>
      <TitleContainer>사용자 커스터마이징</TitleContainer>
      <ContentContainer>
        <AddComponentButton onClick={showEditPage}>
          편집 페이지 이동
        </AddComponentButton>
      </ContentContainer>
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border: 1px solid #000;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  border: 1px solid #000;
`;

const AddComponentButton = styled.button`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default UserCustomizePage;
