import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {'Content-Type': 'application/json'}
})

api.interceptors.request.use(
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