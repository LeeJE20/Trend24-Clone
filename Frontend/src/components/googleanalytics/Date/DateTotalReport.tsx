import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface DateReportProps {
  city: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
  screenPageViews: string;
  sessions: string;
  bounceRate: string;
}

const DateTotalReport = () => {
  const dateReport = useSelector((state: RootState) => state.ga.dateReport);
  const [dateTotalReport, setDateTotalReport] = useState<DateReportProps[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    if (dateReport.length > 0) {
      setSelectedDate(dateReport[0].dimensionValues[0].value);
      setDateTotalReport(
        dateReport.map((data) => ({
          city: data.dimensionValues[0].value,
          activeUsers: data.metricValues[0].value,
          totalUsers: data.metricValues[1].value,
          newUsers: data.metricValues[2].value,
          dauPerMau: data.metricValues[3].value,
          dauPerWau: data.metricValues[4].value,
          wauPerMau: data.metricValues[5].value,
          screenPageViews: data.metricValues[6].value,
          sessions: data.metricValues[7].value,
          bounceRate: data.metricValues[8].value,
        }))
      );
    }
  }, [dateReport]);

  return (
    <Container>
      <Title>도시별 사용자 수</Title>
      <Content>
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          aria-label="도시 선택"
        >
          {dateTotalReport.map((data) => (
            <option value={data.city} key={data.city}>
              {data.city}
            </option>
          ))}
        </select>
        <Report>
          {dateTotalReport
            .filter((data) => data.city === selectedDate)
            .map((data) => (
              <div key={data.city}>
                <div>활성 사용자 수: {data.activeUsers}</div>
                <div>전체 사용자 수: {data.totalUsers}</div>
                <div>신규 사용자 수: {data.newUsers}</div>
                <div>DAU/MAU: {data.dauPerMau}</div>
                <div>DAU/WAU: {data.dauPerWau}</div>
                <div>WAU/MAU: {data.wauPerMau}</div>
                <div>화면 페이지뷰: {data.screenPageViews}</div>
                <div>세션: {data.sessions}</div>
                <div>이탈률: {data.bounceRate}</div>
              </div>
            ))}
        </Report>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Report = styled.div`
  margin-top: 10px;
  border: 1px solid #000;
  padding: 10px;
`;

export default DateTotalReport;
