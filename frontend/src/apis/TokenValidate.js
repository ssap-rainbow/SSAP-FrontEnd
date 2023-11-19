import axios from "axios";

export default function TokenValidate() {
  const accessToken = sessionStorage.getItem("accessToken");
  console.log("accessToken :", accessToken);
  const fetchToken = async () => {
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
      //401 일경우에 쿠키에 있는 refresh 토큰을 사용해서 accessToken 재발급 api 호출
      console.log(error);
    }
  };
  fetchToken();
}
