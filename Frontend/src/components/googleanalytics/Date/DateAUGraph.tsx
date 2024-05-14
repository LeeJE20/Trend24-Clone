import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AUDataProps {
  date: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
}

interface DateUsersGraphProps {
  data: AUDataProps[]; // 여기서 data 타입을 DateUsersProps의 배열로 지정합니다.
}

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DateUsersGraph: React.FC<DateUsersGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "DAU/MAU",
        data: data.map((d) => d.dauPerMau),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "DAU/WAU",
        data: data.map((d) => d.dauPerWau),
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "WAU/MAU",
        data: data.map((d) => d.wauPerMau),
        fill: false,
        backgroundColor: "rgb(255, 205, 86)",
        borderColor: "rgba(255, 205, 86, 0.2)",
      },
    ],
  };

  return (
    <Container>
      <Line data={chartData} options={options} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export default DateUsersGraph;
