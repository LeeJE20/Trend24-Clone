// authenticate.ts
import { GoogleAuth } from "google-auth-library";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import credentials from "./credentials.json" assert { type: "json" };

async function authenticate(): Promise<BetaAnalyticsDataClient> {
  const auth = new GoogleAuth({
    credentials,
    scopes: "https://www.googleapis.com/auth/analytics.readonly",
  });
  const analyticsDataClient = new BetaAnalyticsDataClient({ auth });
  return analyticsDataClient;
}

export default authenticate;
