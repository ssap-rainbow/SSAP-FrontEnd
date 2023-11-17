// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div>
//       메인페이지 입니다!
//       <Link to="/test">테스트페이지로 이동</Link>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { LogoutHandler } from "../../apis/Logout";
import LoginPage from "../Login/LoginPage";
import { Link } from "react-router-dom";
import TokenValidate from "../../apis/TokenValidate";

const HomePage = () => {
  const logout = LogoutHandler();
  return (
    <div>
      <button onClick={logout}>로그아웃</button>
      <p>메인페이지 입니다!!!!!!</p>
      <Link to="/test">테스트페이지로 이동</Link>
      <LoginPage />
    </div>
  );
};

export default HomePage;
