import styled from "styled-components";

import UserDataGraph from "../components/User/UserDataGraph";
import UserStayTimeGraph from "../components/User/UserStayTimeGraph";
import ClickDataChart from "../components/Data/ClickDataChart";

const UserPage = () => {
  return (
    <PageContainer>
      <UserDataGraph />
      <ClickDataChart />
      <UserStayTimeGraph />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default UserPage;
