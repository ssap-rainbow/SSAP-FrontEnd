import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { LoginHandler } from "./pages/Login/LoginHandler";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            // path="/login/oauth2/code/kakao"
            path="/api/oauth/kakao/callback"
            element={<LoginHandler />} //redirect_url에 맞춰 꾸밀 컴포넌트
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
