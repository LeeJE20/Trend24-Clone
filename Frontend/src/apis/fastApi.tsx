import axios from "axios";

const fastApi = axios.create({
  baseURL: "http://trend24.live:8000/fastapi",
  headers: { "Content-Type": "application/json" },
});

export const getBookLive = async (text:string) => {
  console.log(text);
  
  try{
    const res = await fastApi.get(`/book/live?search_sentence=${text}`);
    return res.data.result;
  }catch (error){
    console.log(error);
  }
};

fastApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      // 요청을 보낼 때의 헤더 상태 확인
      // console.log("Request Headers: ", config.headers);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);