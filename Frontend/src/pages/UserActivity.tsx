import styled from "styled-components";

import UserDataGraph from "../components/pages/useractivity/user/UserDataGraph";
import ClickDataChart from "../components/common/chart/ClickDataChart";
import BounceRate from "../components/pages/useractivity/user/BounceRate";
import Users from "../components/googleanalytics/Users";

const UserActivity = () => {
  return (
    <PageContainer>
      <UserDataGraph />
      <ClickDataChart />
      <BounceRate />
      <Users />
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

export default UserActivity;
