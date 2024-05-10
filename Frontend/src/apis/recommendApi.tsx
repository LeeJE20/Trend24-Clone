import { api } from "./apiConfig";

export const getTrendCategories = async () => {
  try {
    const response = await api.get(
      "/recommend/trend-categories?withKeywords=true"
    );

    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};


export const getTrendSearchBooks = async ({ keywords, page, size }: { keywords: number[]; page: number; size: number }) => {
  try {
    const response = await api.get(
      `/recommend/books?keywords=${keywords}&page=${page}&size=${size}`
    );

    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};