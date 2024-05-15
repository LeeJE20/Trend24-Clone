import React from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DeviceAUProps {
  deviceCategory: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
}
interface TabletAUGraphProps {
  data: DeviceAUProps[];
}

const TabletAUGraph: React.FC<TabletAUGraphProps> = ({ data }) => {
  const chartData = {
    labels: ["DAU/MAU", "DAU/WAU", "WAU/MAU"],
    datasets: [
      {
        data: [
          data.reduce((acc, cur) => acc + Number(cur.dauPerMau), 0),
          data.reduce((acc, cur) => acc + Number(cur.dauPerWau), 0),
          data.reduce((acc, cur) => acc + Number(cur.wauPerMau), 0),
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Container>
      <Pie data={chartData} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export default TabletAUGraph;
