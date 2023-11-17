import React, { useEffect } from "react";
import TokenValidate from "../../apis/TokenValidate";

export default function MainPage() {
  useEffect(() => {
    TokenValidate();
  }, []);
  return <div>MainPage</div>;
}
