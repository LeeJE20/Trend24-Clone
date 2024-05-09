import { api } from "./apiConfig";

export const getTrendKeyword = async () => {
  // const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await api.get("/trend/keywords");
    console.log("response", response);
    
    return response.data.result.list;
  } catch (error) {
    console.log(error);
  }
};
