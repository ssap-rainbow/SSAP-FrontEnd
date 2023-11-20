import React, { useEffect } from "react";
import TokenValidate from "../../apis/TokenValidate";

export default function MainPage() {
  return (
    <>
      <TokenValidate />
      <div>MainPage 토큰 유효성검사는 왜 안돼????</div>
    </>
  );
}
