import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import DateUsersGraph from "./DateUsersGraph";

interface DateReportProps {
  date: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

const DateUsers = () => {
  const dateReport = useSelector((state: RootState) => state.ga.dateReport);
  const [Users, setUsers] = useState<DateReportProps[]>([]);

  useEffect(() => {
    setUsers(
      dateReport.map((data) => ({
        date: data.dimensionValues[0].value,
        activeUsers: data.metricValues[0].value,
        totalUsers: data.metricValues[1].value,
        newUsers: data.metricValues[2].value,
      }))
    );
  }, [dateReport]);

  return (
    <Container>
      <Title>날짜별 사용자 수</Title>
      <Content>
        <DateUsersGraph data={Users} />
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
  box-sizing: border-box;
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

export default DateUsers;
