import React from "react";

const LoginHandler = () => {
  return (
    <div>
      여기는 로그인 핸들러 입니다. 인가코드가 전달되고 나서 redirect URI로
      이동된다면 여기가 실행되어야 해요 원래!!
    </div>
  );
};

export default LoginHandler;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const LoginHandler = () => {
//   const navigate = useNavigate();
//   const code = new URL(window.location.href).searchParams.get("code");
//   console.log("code 받음", code);
//   // 사용자 이름과 이메일을 상태로 관리
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");

//   useEffect(() => {
//     kakaoLogin();
//   }, [code]);

//   const kakaoLogin = async () => {
//     try {
//       console.log("서버에 코드 요청 보냄", code);
//       const res = await axios({
//         method: "GET",
//         url: `/api/oauth/kakao/callback?code=${code}`,
//         // url: `https://ke08fd11a16dba.user-app.krampoline.com/api/oauth/kakao/callback?code=${code}`,
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       });
//       console.log("서버로부터 응답", res);

//       // 백엔드 응답 처리
//       if (res.data.loginSuccess) {
//         console.log("로그인 성공", res.data);
//         const { userName, userEmail } = res.data.account;
//         setUserName(userName); // 상태 업데이트
//         setUserEmail(userEmail); // 상태 업데이트
//         localStorage.setItem("accessToken", res.data.accessToken); // 액세스 토큰 저장
//         console.log("엑세스 토큰 저장", localStorage.getItem("accessToken"));
//         console.log("네비게이팅");
//         navigate("/"); // 메인 페이지로 이동
//       } else {
//         console.error("로그인 실패", res.data);
//       }
//     } catch (error) {
//       console.error("로그인 요청 실패:", error);
//     }
//   };

//   return <div>로그인 중입니다...</div>;
// };
