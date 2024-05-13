import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import CityUsersGraph from "./CityUsersGraph";
import CityTotalUsersGraph from "./CityTotalUsersGraph";

interface CityReportProps {
  city: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

const CityUsers = () => {
  const cityReport = useSelector((state: RootState) => state.ga.cityReport);
  const [cityUsers, setCityUsers] = useState<CityReportProps[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("전체");

  useEffect(() => {
    setCityUsers(
      cityReport.map((data) => ({
        city: data.dimensionValues[0].value,
        activeUsers: data.metricValues[0].value,
        totalUsers: data.metricValues[1].value,
        newUsers: data.metricValues[2].value,
      }))
    );
  }, [cityReport]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Container>
      <Title>도시별 사용자 수</Title>
      <select onChange={handleCityChange}>
        <option value="전체">전체</option>
        {cityUsers.map((data) => (
          <option value={data.city} key={data.city}>
            {data.city}
          </option>
        ))}
      </select>
      <Content>
        {selectedCity === "전체" && <CityTotalUsersGraph data={cityUsers} />}
        {selectedCity !== "전체" && (
          <CityUsersGraph
            data={cityUsers.filter((data) => data.city === selectedCity)}
          />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default CityUsers;
