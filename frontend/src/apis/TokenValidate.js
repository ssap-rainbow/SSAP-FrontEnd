import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function TokenValidate() {
  const [cookies, setCookie] = useCookies(["refreshToken"]);
  useEffect(() => {
    const validateToken = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      const refreshToken = cookies.refreshToken; // 쿠키에서 리프레시 토큰 가져오기

      console.log("accessToken :", accessToken);
      console.log("refreshToken :", refreshToken);

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
          // 401 오류 발생 시, 리프레시 토큰을 사용해서 새로운 엑세스 토큰을 갱신
          try {
            const refreshTokenResponse = await axios({
              method: "GET",
              url: `/api/oauth/refresh-token?refreshToken=${refreshToken}`,
            });
            const newAccessToken = refreshTokenResponse.data;
            console.log("갱신된 accessToken:", newAccessToken);

            // 갱신된 엑세스 토큰을 세션 스토리지에 저장
            sessionStorage.setItem("accessToken", newAccessToken);

            // 갱신된 엑세스 토큰으로 다시 요청을 보내야 하나? TODO
            // 그렇다면 여기에 로직 작성
          } catch (refreshError) {
            console.log("엑세스 토큰 갱신 실패", refreshError);
          }
        } else {
          console.log(error);
        }
      }
    };

    validateToken();
  }, [cookies]); //cookies를 배열에 추가하면 리프레시 토큰이 변경되었을 때에 토큰 유효성 검사와 엑세스 토큰 갱신이 이루어짐.

  return null;
}

export default TokenValidate;
