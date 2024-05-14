import styled from "styled-components";
import { useCityReportAPI } from "./ReportDataAPI";

import CityUsers from "./City/CityUsers";
import CityTotalReport from "./City/CityTotalReport";

const GACityReport = () => {
  useCityReportAPI();

  return (
    <Container>
      <CityTotalReport />
      <CityUsers />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  max-height: 100%;
`;

export default GACityReport;
