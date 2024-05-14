import styled from "styled-components";
import { useDateReportAPI } from "./ReportDataAPI";
import { useState } from "react";

import DateTotalReport from "./Date/DateTotalReport";
import DateAU from "./Date/DateAU";
import DateBounceRate from "./Date/DateBounceRate";
import DateView from "./Date/DateView";
import DateUsers from "./Date/DateUsers";

const GADateReport = () => {
  const [selectedVB, setSelectedVB] = useState<string>("조회수");
  const [selectedAU, setSelectedAU] = useState<string>("사용자수");
  useDateReportAPI();

  return (
    <ContentContainer>
      <DateTotalReport />
      <First>
        <select
          value={selectedVB}
          onChange={(e) => setSelectedVB(e.target.value)}
          aria-label="GA 보고서 선택"
        >
          <option>조회수</option>
          <option>이탈률</option>
        </select>
        {selectedVB === "조회수" && <DateView />}
        {selectedVB === "이탈률" && <DateBounceRate />}
      </First>
      <Second>
        <select
          value={selectedAU}
          onChange={(e) => setSelectedAU(e.target.value)}
          aria-label="GA 보고서 선택"
        >
          <option>사용자수</option>
          <option>사용자수 비율</option>
        </select>
        {selectedAU === "사용자수" && <DateUsers />}
        {selectedAU === "사용자수 비율" && <DateAU />}
      </Second>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Second = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default GADateReport;
