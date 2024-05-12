import { api } from "./apiConfig";

export const getSearchBook = async ({
  title,
  category,
  page,
  size,
}: {
  title: string;
  category: string;
  page: number;
  size: number;
}) => {
  try {
    let url = `/search/?page=${page}&size=${size}`;
    if (title !== "") {
      url += `&title=${title}`;
    }
    if (category !== "") {
      url += `&category=${category}`;
    }
    const response = await api.get(url);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
