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
        <SelectBox
          value={selectedVB}
          onChange={(e) => setSelectedVB(e.target.value)}
          aria-label="GA 보고서 선택"
        >
          <option>조회수</option>
          <option>이탈률</option>
        </SelectBox>
        {selectedVB === "조회수" && <DateView />}
        {selectedVB === "이탈률" && <DateBounceRate />}
      </First>
      <Second>
        <SelectBox
          value={selectedAU}
          onChange={(e) => setSelectedAU(e.target.value)}
          aria-label="GA 보고서 선택"
        >
          <option>사용자수</option>
          <option>사용자수 비율</option>
        </SelectBox>
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
  z-index: 1;
`;

const SelectBox = styled.select`
  width: 20%; // 넓이 설정
  height: 10%; // 높이 설정
  background-color: #c2cec5; // 배경색
  border-radius: 5px; // 테두리 둥글게
  border: 1px solid #c2cec575; // 테두리 색상
  padding: 5px 10px; // 내부 여백
  font-size: 16px; // 글자 크기
  color: #333; // 글자 색상
  box-sizing: border-box; // 내부 여백 포함 크기 계산
  cursor: pointer; // 커서 모양 변경

  // SelectBox 확장 시 아이템들 간격 조정
  option {
    padding: 10px;
    background-color: white;
    color: black;
    ::selection {
      background-color: #8da392;
      color: white;
    }

    // SelectBox 아이템 호버 시 색상 변경
    &:hover {
      background-color: #8da392;
      color: white;
    }
  }

  // SelectBox 포커스 시 테두리 색상 변경
  &:focus {
    border-color: #8da392;
    outline: none;
  }

  // SelectBox 호버 시 테두리 색상 변경
  &:hover {
    border-color: #8da392;
  }
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
