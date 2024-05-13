import styled from "styled-components";

import GADateReport from "../components/googleanalytics/GADateReport";
import GACityReport from "../components/googleanalytics/GACityReport";
import GADeviceReport from "../components/googleanalytics/GADeviceReport";

const UserActivity = () => {
  return (
    <PageContainer>
      <MainContentContainer>
        <GADateReport />
      </MainContentContainer>
      <SubContainer>
        <SubContentContainer>
          <GACityReport />
        </SubContentContainer>
        <SubContentContainer>
          <GADeviceReport />
        </SubContentContainer>
      </SubContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const MainContentContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UserActivity;
