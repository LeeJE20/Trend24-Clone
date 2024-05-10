// runReport.ts
import { AppDispatch } from "../../store/store";

import { setGa } from "../../store/slices/gaSlice"; // 경로는 실제 상황에 맞게 조정해야 합니다.
import authenticate from "./authenticate";

const runReport = async (dispatch: AppDispatch): Promise<void> => {
  const analyticsDataClient = await authenticate();
  const [response] = await analyticsDataClient.runReport({
    property: "properties/438420150",
    dateRanges: [
      {
        startDate: "2024-01-01",
        endDate: "today",
      },
    ],
    dimensions: [
      { name: "city" },
      { name: "deviceCategory" },
      { name: "userAgeBracket" },
      { name: "userGender" },
    ],
    metrics: [
      { name: "activeUsers" },
      { name: "totalUsers" },
      { name: "dauPerMau" },
      { name: "wauPerMau" },
      { name: "mauPerMau" },
      { name: "newUsers" },
    ],
  });

  if (!response.rows || response.rows.length === 0) return;

  const firstRow = response.rows[0];
  if (!firstRow.dimensionValues || !firstRow.metricValues) return; // 여기에 체크를 추가

  const city = firstRow.dimensionValues[0]?.value ?? ""; // 옵셔널 체이닝,  널 병합 연산자를 사용하여 기본값을 ''로 설정
  const deviceCategory = firstRow.dimensionValues[1]?.value ?? "";
  const userAgeBracket = firstRow.dimensionValues[2]?.value ?? "";
  const userGender = firstRow.dimensionValues[3]?.value ?? "";

  const activeUsers = parseInt(firstRow.metricValues[0]?.value ?? "0"); // 옵셔널 체이닝과 널 병합 연산자를 사용
  const totalUsers = parseInt(firstRow.metricValues[1]?.value ?? "0"); // 옵셔널 체이닝과 널 병합 연산자를 사용
  const dauPerMau = parseInt(firstRow.metricValues[2]?.value ?? "0");
  const wauPerMau = parseInt(firstRow.metricValues[3]?.value ?? "0");
  const mauPerMau = parseInt(firstRow.metricValues[4]?.value ?? "0");
  const newUsers = parseInt(firstRow.metricValues[5]?.value ?? "0");

  dispatch(
    setGa({
      activeUsers,
      totalUsers,
      city,
      deviceCategory,
      userAgeBracket,
      userGender,
      dauPerMau,
      wauPerMau,
      mauPerMau,
      newUsers,
    })
  );
};

export default runReport;
