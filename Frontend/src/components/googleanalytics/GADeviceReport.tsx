import styled from "styled-components";
import { useDeviceReportAPI } from "./ReportDataAPI";
import DeviceUsers from "./Device/DeviceUsers";
import DeviceAU from "./Device/DeviceAU";

import DeviceTotalReport from "./Device/DeviceTotalReport";

const GADateReport = () => {
  useDeviceReportAPI();

  return (
    <Container>
      <Title>기기별 리포트</Title>
      <ContentContainer>
        <ReportContainer>
          <DeviceTotalReport />
        </ReportContainer>
        <GraphContainer>
          <DeviceUsers />
          <DeviceAU />
        </GraphContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ReportContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
`;

const GraphContainer = styled.div`
  flex: 3 1 0;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export default GADateReport;
