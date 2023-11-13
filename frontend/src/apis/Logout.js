import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogoutHandler = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 액세스 토큰 가져오기
    const provider = localStorage.getItem("provider");
    if (!accessToken) {
      console.error("액세스 토큰이 없습니다.");
      return;
    }

    try {
      const response = await axios.post(
        `/api/oauth/${provider}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("로그아웃 성공");
        localStorage.removeItem("accessToken"); // 토큰 삭제
        localStorage.removeItem("name"); // 다른 로컬 스토리지 데이터도 삭제
        localStorage.removeItem("provider");
        navigate("/login"); // 로그인 페이지로 리디렉션
      }
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  return logout;
};
