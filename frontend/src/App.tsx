import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Test from "./pages/Test";
import { LoginHandler } from "./pages/Login/LoginHandler";
import AppRouter from "./router/Router";

// function App() {
//   return <AppRouter />;
// }
// export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login/oauth2/code/kakao",
    element: <LoginHandler />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import { LoginHandler } from "./pages/Login/LoginHandler";
// import Test from "./pages/Test";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="*" element={<Test />} />
//         {/* <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route
//             // path="/login/oauth2/code/kakao"
//             path="/api/oauth/kakao/callback"
//             element={<LoginHandler />} //redirect_url에 맞춰 꾸밀 컴포넌트
//           /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
