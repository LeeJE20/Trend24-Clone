import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import DateAUGraph from "./DateAUGraph";

interface AUDataProps {
  date: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
}

const DateAU = () => {
  const [totalAUData, setTotalAUData] = useState<AUDataProps[]>([]);
  const reportData = useSelector((state: RootState) => state.ga.dateReport);

  useEffect(() => {
    setTotalAUData(
      reportData.map((data) => ({
        date: data.dimensionValues[0].value,
        dauPerMau: data.metricValues[3].value,
        dauPerWau: data.metricValues[4].value,
        wauPerMau: data.metricValues[5].value,
      }))
    );
  }, [reportData]);

  return (
    <Container>
      <DateAUGraph data={totalAUData} />
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

export default DateAU;
