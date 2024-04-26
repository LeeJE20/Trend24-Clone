import styled from "styled-components";

const UserDataGraph = () => {
  return (
    <UserDataGraphContainer>
      <div>UserDataGraph</div>
    </UserDataGraphContainer>
  );
};

const UserDataGraphContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
  border: 1px solid #000;
`;

export default UserDataGraph;
