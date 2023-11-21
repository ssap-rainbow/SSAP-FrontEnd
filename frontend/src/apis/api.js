import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://k042b6e5a7030a.user-app.krampoline.com/",
});

// Request 인터셉터 추가
api.interceptors.request.use(
  async (config) => {
    const accessToken = sessionStorage.getItem("accessToken");

    // 토큰이 있는 경우 헤더에 추가
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
