import { api } from "./apiConfig";

// QB-04 도서 검색창에 입력한 키워드
export const getSearchBook = async (bookName: string) => {
  try {
    const res = await api.get(`/anonymous/search/${bookName}`);
    return res.data.result.list;
  } catch (error) {
    console.log(error);
  }
};

// QB-01 전체 질문 리스트
export const getQuestion = async () => {
  try {
    const res = await api.get(`/anonymous/question`);
    return res.data.result.list;
  } catch (error) {
    console.log(error);
  }
};

// QB-03 선택한 질문에 해당되는 도서들의 제목 리스트
export const getQuestionBooks = async (questionId: number) => {
  try {
    const res = await api.get(`/anonymous/question/${questionId}`);
    return res.data.result.list;
  } catch (error) {
    console.log(error);
  }
};

// QB-03 선택한 질문에 해당되는 도서들의 제목 리스트
export const postBookSelect = async (questionId: number, bookId: number) => {
  try {
    const res = await api.post(`/anonymous/question/${questionId}/books`, {
      bookId: `${bookId}`,
    });
    return res.data.result.list;
  } catch (error) {
    console.log(error);
  }
};
