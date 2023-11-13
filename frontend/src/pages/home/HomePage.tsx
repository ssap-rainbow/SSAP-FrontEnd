import React from "react";
import { LogoutHandler } from "../../apis/Logout";

const HomePage = () => {
  const logout = LogoutHandler();
  return (
    <div>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default HomePage;
