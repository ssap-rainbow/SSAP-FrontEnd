import React from "react";
import { LogoutHandler } from "../../apis/Logout";
import LoginPage from "../Login/LoginPage";

const HomePage = () => {
  const logout = LogoutHandler();
  return (
    <div>
      <button onClick={logout}>로그아웃</button>
      <LoginPage />
    </div>
  );
};

export default HomePage;
