import { GoogleAuth } from "google-auth-library";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import credentials from "./credentials.json" assert { type: "json" };

async function authenticate() {
  const auth = new GoogleAuth({
    credentials,
    scopes: "https://www.googleapis.com/auth/analytics.readonly",
  });
  const analyticsDataClient = new BetaAnalyticsDataClient({ auth });
  return analyticsDataClient;
}

async function runReport() {
  const analyticsDataClient = await authenticate();
  const [response] = await analyticsDataClient.runReport({
    property: "properties/438420150",
    dateRanges: [
      {
        startDate: "2024-01-01",
        endDate: "today",
      },
    ],
    dimensions: [{ name: "city" }],
    metrics: [{ name: "activeUsers" }, { name: "totalUsers" }],
  });

  console.log("Report result:", response);
  console.log(response.rows.map((row) => row.dimensionValues[0].value));
  console.log(response.rows.map((row) => row.metricValues[0].value));
  console.log(response.rows.map((row) => row.metricValues[1].value));
}

runReport().catch(console.error);
