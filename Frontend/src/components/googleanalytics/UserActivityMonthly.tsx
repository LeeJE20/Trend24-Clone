import styled from "styled-components";

const UserActivityMonthly = () => {
  return (
    <Container>
      <TitleContainer>User Activity Monthly</TitleContainer>
      <ContentContainer>
        <div>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </div>
        <AddDataContainer>
          <h1>Add data</h1>
          <AddComponentButton>+</AddComponentButton>
        </AddDataContainer>
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
`;

const ContentContainer = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const AddDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddComponentButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #41c241;
  color: #fff;
  border: none;
`;

export default UserActivityMonthly;
