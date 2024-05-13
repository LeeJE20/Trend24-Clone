import { useEffect, useState } from "react";
import axios from "axios";

type ReportDataProps = {
  name: string;
};

const Example = () => {
  const [reportData, setReportData] = useState<ReportDataProps[]>([]);

  useEffect(() => {
    axios
      .post("https://oauth2.googleapis.com/token", {
        client_id: import.meta.env.VITE_GA4_CLIENT_ID,
        client_secret: import.meta.env.VITE_GA4_CLIENT_SECRET,
        refresh_token: import.meta.env.VITE_GA4_OAUTH_REFRESH_TOKEN,
        grant_type: "refresh_token",
      })
      .then((response) => {
        axios
          .post(
            `https://analyticsdata.googleapis.com/v1beta/properties/${
              import.meta.env.VITE_GA4_PROPERTY_ID
            }:runReport`,
            {
              dimensions: [
                { name: "date" },
                { name: "city" },
                { name: "deviceModel" },
                { name: "deviceCategory" },
                { name: "userAgeBracket" },
                { name: "userGender" },
              ],
              metrics: [
                { name: "activeUsers" },
                { name: "totalUsers" },
                { name: "newUsers" },
                { name: "dauPerMau" },
                { name: "dauPerWau" },
                { name: "wauPerMau" },
                { name: "screenPageViews" },
                { name: "sessions" },
              ],
              dateRanges: [{ startDate: "2024-05-01", endDate: "today" }],
              keepEmptyRows: true,
            },
            {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            console.log(response.data.dimensionHeaders);
            setReportData(response.data.dimensionHeaders);
          })
          .catch((error) => {
            console.log("[REPORT ERROR] ", error);
          });
      })
      .catch((error) => {
        console.log("[TOKEN ERROR] ", error);
      });
  }, []);

  return (
    <>
      <div>Google Analytics Example</div>
      <div>
        {reportData.length > 0 &&
          reportData.map((data, index) => {
            return <div key={index}>{data.name}</div>;
          })}
      </div>
    </>
  );
};

export default Example;
