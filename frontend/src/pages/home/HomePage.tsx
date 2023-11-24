import React from "react";
import Main from "../../components/Main/Main";
import { MainHeader } from "../../components/@common/Header/MainHeader";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/@common/Button/Button";
import { useRecoilValue } from "recoil";
import { authInfoState } from "../../recoil/atoms/userInfo";

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
    <HomeWrapper>
      <MainHeader />
      <Main />
      <Button
        fixed
        text="✋ 요청하기"
        size="medium"
        onClick={handleRequestClick}
      />
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export default HomePage;
