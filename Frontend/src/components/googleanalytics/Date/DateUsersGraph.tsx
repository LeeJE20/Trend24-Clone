import React from "react";
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

interface DateUsersProps {
  date: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

interface DateUsersGraphProps {
  data: DateUsersProps[]; // 여기서 data 타입을 DateUsersProps의 배열로 지정합니다.
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
        label: "활성 사용자",
        data: data.map((d) => d.activeUsers),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "전체 사용자",
        data: data.map((d) => d.totalUsers),
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "신규 사용자",
        data: data.map((d) => d.newUsers),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

export default DateUsersGraph;
