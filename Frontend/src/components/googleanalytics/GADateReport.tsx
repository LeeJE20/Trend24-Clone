import styled from "styled-components";
import { useDateReportAPI } from "./ReportDataAPI";

import DateTotalReport from "./Date/DateTotalReport";
import DateAU from "./Date/DateAU";
import DateBounceRate from "./Date/DateBounceRate";
import DateView from "./Date/DateView";
import DateUsers from "./Date/DateUsers";

const GADateReport = () => {
  useDateReportAPI();

  return (
    <Container>
      <Title>날짜별 리포트</Title>
      <ContentContainer>
        <ReportContainer>
          <DateTotalReport />
        </ReportContainer>
        <GraphContainer>
          <DateView />
          <DateAU />
          <DateBounceRate />
          <DateUsers />
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
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export default GADateReport;
