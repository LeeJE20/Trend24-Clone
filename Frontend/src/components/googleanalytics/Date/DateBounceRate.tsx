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

export default DateBounceRate;
