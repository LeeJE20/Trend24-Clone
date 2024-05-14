import styled from "styled-components";
import { useDeviceReportAPI } from "./ReportDataAPI";
import DeviceUsers from "./Device/DeviceUsers";
import DeviceAU from "./Device/DeviceAU";

import DeviceTotalReport from "./Device/DeviceTotalReport";

const GADateReport = () => {
  useDeviceReportAPI();

  return (
    <ContentContainer>
      <DeviceTotalReport />
      <DeviceUsers />
      <DeviceAU />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  max-height: 100%;
`;

export default GADateReport;
