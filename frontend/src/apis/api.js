import axios from "axios";
import { useNavigate } from "react-router-dom";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://k042b6e5a7030a.user-app.krampoline.com/",
});

const ApiWrapper = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.error("액세스 토큰이 없습니다. 로그아웃 처리를 진행합니다.");
    sessionStorage.removeItem("accessToken");
    navigate("/login");
  };

  // Request 인터셉터 추가
  api.interceptors.request.use(
    async (config) => {
      const accessToken = sessionStorage.getItem("accessToken");

      // 토큰이 있는 경우 헤더에 추가
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      } else {
        handleLogout();
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return null;
};

export default api;
