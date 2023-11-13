import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginHandeler } from "./pages/Login/LoginHandler";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LoginPage />
        <Routes>
          <Route
            path="/login/oauth2/code/kakao"
            element={<LoginHandeler />} //redirect_url에 맞춰 꾸밀 컴포넌트
          />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
