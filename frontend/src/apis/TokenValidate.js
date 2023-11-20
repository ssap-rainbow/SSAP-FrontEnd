import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function TokenValidate() {
  const [cookies, setCookie] = useCookies(["refreshToken"]);

  useEffect(() => {
    console.log("TokenValidate 컴포넌트 실행됨");

    const validateToken = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const refreshToken = cookies.refreshToken;

      console.log("accessToken :", accessToken);
      console.log("refreshToken :", refreshToken);

      // refreshToken이 비동기로 설정되었을 때만 실행
      if (refreshToken) {
        console.log(
          "refreshToken이 비동기로 설정되었을 때 refreshToken :",
          refreshToken
        );

        try {
          const res = await axios({
            method: "GET",
            url: `/api/oauth/validate-token?accessToken=${accessToken}`,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log("res", res);
        } catch (error) {
          if (error.response && error.response.status === 401) {
            try {
              const refreshTokenResponse = await axios({
                method: "GET",
                url: `/api/oauth/refresh-token?refreshToken=${refreshToken}`,
              });
              const newAccessToken = refreshTokenResponse.data;
              console.log("갱신된 accessToken:", newAccessToken);

              sessionStorage.setItem("accessToken", newAccessToken);
            } catch (refreshError) {
              console.log("엑세스 토큰 갱신 실패", refreshError);
            }
          } else {
            console.log("에러발생", error);
          }
        }
      }
    };

    validateToken();
  }, [cookies.refreshToken]);

  return null;
}

export default TokenValidate;
