import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";

import DateViewGraph from "./DateViewGraph";

interface ViewDataProps {
  date: string;
  screenPageViews: string;
}

const DateView = () => {
  const [totalViewData, setTotalViewData] = useState<ViewDataProps[]>([]);
  const reportData = useSelector((state: RootState) => state.ga.dateReport);

  useEffect(() => {
    setTotalViewData(
      reportData.map((data) => ({
        date: data.dimensionValues[0].value,
        screenPageViews: data.metricValues[6].value,
      }))
    );
  }, [reportData]);

  return (
    <Container>
      <DateViewGraph data={totalViewData} />
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

export default DateView;
