import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import DateBounceRateGraph from "./DateBounceRateGraph";

interface BRDataProps {
  date: string;
  bounceRate: string;
}

const DateBounceRate = () => {
  const [totalBounceRateData, setTotalBounceRateData] = useState<BRDataProps[]>(
    []
  );
  const reportData = useSelector((state: RootState) => state.ga.dateReport);

  useEffect(() => {
    setTotalBounceRateData(
      reportData.map((data) => ({
        date: data.dimensionValues[0].value,
        bounceRate: data.metricValues[7].value,
      }))
    );
  }, [reportData]);

  return (
    <Container>
      <Title>날짜별 이탈률</Title>
      <DateBounceRateGraph data={totalBounceRateData} />
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

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export default DateBounceRate;
