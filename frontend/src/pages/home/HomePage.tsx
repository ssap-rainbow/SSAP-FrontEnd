import React from "react";
import Home from "../../components/Home/Home";
import { LogoutHandler } from "../../apis/Logout";

function HomePage() {
  const logout = LogoutHandler();
  return (
    <div>
      <Home />
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default HomePage;
