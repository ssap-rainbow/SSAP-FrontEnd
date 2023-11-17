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
      console.log(error);
    }
  };
}
