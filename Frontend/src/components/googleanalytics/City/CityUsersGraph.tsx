import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CityReportProps {
  city: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

interface CityUsersGraphProps {
  data: CityReportProps[];
}

const CityUsersGraph: React.FC<CityUsersGraphProps> = ({ data }) => {
  const chartData = {
    labels: ["활성 사용자", "전체 사용자", "신규 사용자"],
    datasets: [
      {
        data: [
          data.reduce((acc, cur) => acc + Number(cur.activeUsers), 0),
          data.reduce((acc, cur) => acc + Number(cur.totalUsers), 0),
          data.reduce((acc, cur) => acc + Number(cur.newUsers), 0),
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

  return <Pie data={chartData} />;
};

export default CityUsersGraph;
