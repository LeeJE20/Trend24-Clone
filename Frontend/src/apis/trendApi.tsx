import { api } from "./apiConfig";

export const getTrendKeyword = async () => {
  try {
    const response = await api.get("/trend/keywords");    
    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};

export const getKeywordRanking = async (keywordId:number) => {
  try {
    const response = await api.get(`/trend/keywords/${keywordId}/ranking`);    
    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};

export const getKeywordReference = async (keywordId:number) => {
  try {
    const response = await api.get(`/trend/keywords/${keywordId}/reference`);    
    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};