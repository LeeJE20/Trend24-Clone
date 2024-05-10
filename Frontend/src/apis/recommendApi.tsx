import { api } from "./apiConfig";

export const getTrendCategories = async () => {
  try {
    const response = await api.get(
      "/recommend/trend-categories?withKeywords=true"
    );
    console.log("response", response);

    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};
interface trendSearchBooksType {
  keywords:number[];
  page:number;
  size:number;
}

export const getTrendSearchBooks = async ({ keywords, page, size }: { keywords: number[]; page: number; size: number }) => {
  try {
    const response = await api.get(
      `/recommend/books?keywords=${keywords}&page=${page}&size=${size}`
    );
    console.log("response", response);

    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};