import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { LoginHandler } from "./pages/Login/LoginHandler";
import Test from "./pages/Test";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            // path="/login/oauth2/code/kakao"
            path="/api/oauth/kakao/callback"
            element={<LoginHandler />} //redirect_url에 맞춰 꾸밀 컴포넌트
          /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
