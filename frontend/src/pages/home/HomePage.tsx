import React from "react";
import Main from "../../components/Main/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/@common/Button/Button";
import { useRecoilValue } from "recoil";
import { authInfoState } from "../../recoil/atoms/userInfo";
import Template from "../../components/Template";

function HomePage() {
  const navigate = useNavigate();
  const authInfo = useRecoilValue(authInfoState);

  const { userName, userEmail } = authInfo;

  console.log("userName :", userName);
  console.log("userEmail :", userEmail);

  // 요청서 작성하기로 이동
  const handleRequestClick = () => {
    navigate("/errand/request");
  };

  return (
    <Template headerProps={{ type: "logo" }}>
      <HomeWrapper>
        <Main />
        <Button
          fixed
          text="✋ 요청하기"
          size="medium"
          onClick={handleRequestClick}
        />
      </HomeWrapper>
    </Template>
  );
}
const HomeWrapper = styled.div`
  width: 100%;
`;

export default HomePage;
