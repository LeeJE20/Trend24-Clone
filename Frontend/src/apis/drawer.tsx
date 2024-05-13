import { api } from "./apiConfig";

export const postDrawerKeyword = async (keyword:string) => {
  try {
    const response = await api.post("/drawer", {
      name: `${keyword}`,
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const postDrawerBook = async (drawerId: number, bookId: number) => {
  try {
    const response = await api.post(`/drawer/${drawerId}`, {
      bookId: `${bookId}`,
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};