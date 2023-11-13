import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  // 사용자 이름과 이메일을 상태로 관리
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    kakaoLogin();
  }, [code]);

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
        const { userName, userEmail } = res.data.account;
        setUserName(userName); // 상태 업데이트
        setUserEmail(userEmail); // 상태 업데이트
        localStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰 저장
        navigate("/"); // 메인 페이지로 이동
      } else {
        console.error("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 실패:", error);
    }
  };

  return (
    <div>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
      {/* 사용자 정보 화면에 표시 */}
      {userName && <p>이름: {userName}</p>}
      {userEmail && <p>이메일: {userEmail}</p>}
    </div>
  );
};
