import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginHandeler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://ke08fd11a16dba.user-app.krampoline.com/api/oauth/kakao/callback/?code=${code}`,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        });

        // 백엔드 응답 처리
        if (res.data.loginSuccess) {
          localStorage.setItem("name", res.data.account.userName);
          localStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰 저장
          navigate("/"); // 메인 페이지로 이동
        } else {
          // 로그인 실패 처리
          console.error("로그인 실패");
        }
      } catch (error) {
        console.error("로그인 요청 실패:", error);
      }
    };

    kakaoLogin();
  }, [code]);

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
};
