import styled from "styled-components";
import { useState } from "react";

import GADateReport from "../components/googleanalytics/GADateReport";
import GACityReport from "../components/googleanalytics/GACityReport";
import GADeviceReport from "../components/googleanalytics/GADeviceReport";

import {
  useCityReportAPI,
  useDateReportAPI,
  useDeviceReportAPI,
} from "../components/googleanalytics/ReportDataAPI";
import BookClicks from "../components/pages/useractivity/user/BookClicks";
import KeywordViews from "../components/pages/useractivity/user/KeywordViews";

const UserActivity = () => {
  const [selectedReport, setSelectedReport] = useState<string>("날짜별");

  useDateReportAPI();
  useCityReportAPI();
  useDeviceReportAPI();

  return (
    <PageContainer>
      <GAContentContainer>
        <SelectContainer>
          <select
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
            aria-label="GA 보고서 선택"
          >
            <option>날짜별</option>
            <option>도시별</option>
            <option>기기별</option>
          </select>
        </SelectContainer>

        {selectedReport === "날짜별" && <GADateReport />}
        {selectedReport === "도시별" && <GACityReport />}
        {selectedReport === "기기별" && <GADeviceReport />}
      </GAContentContainer>
      <EventContentContainer>
        <BookClicks />
        <KeywordViews />
      </EventContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const GAContentContainer = styled.div`
  position: relative;
  padding: 10px;
  flex: 1 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SelectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventContentContainer = styled.div`
  padding: 10px;
  width: 100%;
  flex: 1 0 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
`;

export default UserActivity;
