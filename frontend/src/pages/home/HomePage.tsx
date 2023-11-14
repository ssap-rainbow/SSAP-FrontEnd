import React from "react";
import { LogoutHandler } from "../../apis/Logout";
import LoginPage from "../Login/LoginPage";

const HomePage = () => {
  const logout = LogoutHandler();
  return (
    <div>
      <button onClick={logout}>로그아웃</button>
      <p>메인페이지 입니다!!!!!!</p>
      <LoginPage />
    </div>
  );
};

export default HomePage;
