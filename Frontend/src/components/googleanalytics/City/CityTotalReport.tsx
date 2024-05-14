import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface CityReportProps {
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

const CityTotalReport = () => {
  const cityReport = useSelector((state: RootState) => state.ga.cityReport);
  const [cityTotalReport, setCityTotalReport] = useState<CityReportProps[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    if (cityReport.length > 0) {
      setSelectedCity(cityReport[0].dimensionValues[0].value);
      setCityTotalReport(
        cityReport.map((data) => ({
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
  }, [cityReport]);

  return (
    <Container>
      <Title>도시별 보고서</Title>
      <Content>
        <DropdownSelect
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          aria-label="도시 선택"
        >
          {cityTotalReport.map((data) => (
            <DropdownOption value={data.city} key={data.city}>
              {data.city}
            </DropdownOption>
          ))}
        </DropdownSelect>
        <Report>
          {cityTotalReport
            .filter((data) => data.city === selectedCity)
            .map((data) => (
              <ReportItems key={data.city}>
                <ReportItem>
                  <ReportLabel>City Category:</ReportLabel>
                  <ReportValue>{data.city}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>Active Users:</ReportLabel>
                  <ReportValue>{data.activeUsers}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>Total Users:</ReportLabel>
                  <ReportValue>{data.totalUsers}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>New Users:</ReportLabel>
                  <ReportValue>{data.newUsers}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>DAU/MAU:</ReportLabel>
                  <ReportValue>{data.dauPerMau}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>DAU/WAU:</ReportLabel>
                  <ReportValue>{data.dauPerWau}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>WAU/MAU:</ReportLabel>
                  <ReportValue>{data.wauPerMau}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>Screen Page Views:</ReportLabel>
                  <ReportValue>{data.screenPageViews}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>Sessions:</ReportLabel>
                  <ReportValue>{data.sessions}</ReportValue>
                </ReportItem>
                <ReportItem>
                  <ReportLabel>Bounce Rate:</ReportLabel>
                  <ReportValue>{data.bounceRate}</ReportValue>
                </ReportItem>
              </ReportItems>
            ))}
        </Report>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  width: 100%;
  height: 10%;
`;

const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const DropdownSelect = styled.select`
  width: 100%;
  height: 10%;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #5f996d;
  outline: none;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:hover {
    border-color: #77a081;
  }

  &:focus {
    border-color: #9ba09c;
  }
`;

const DropdownOption = styled.option`
  background-color: #fff;
  padding: 10px 0;
`;

const Report = styled.div`
  width: 100%;
  height: 90%;
  border-radius: 8px;
  background: #5f996d;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const ReportItems = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ReportItem = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

const ReportLabel = styled.div`
  width: 50%;
  height: 100%;
  font-weight: bold;
`;

const ReportValue = styled.div`
  width: 50%;
  height: 100%;
  color: #555;
  overflow: hidden;
`;

export default CityTotalReport;
