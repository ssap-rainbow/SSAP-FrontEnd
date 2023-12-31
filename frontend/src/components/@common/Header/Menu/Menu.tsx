import React, { useEffect } from "react";
import UserProfile from "./UserProfile";
import styled, { css } from "styled-components";
import Nav from "./Nav";
import { GnbHeader } from "../GnbHeader/GnbHeader";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";

interface MenuProps {
  isOpen: boolean;
}

function Menu({ isOpen }: MenuProps) {
  useLockBodyScroll(isOpen);

  return (
    <MenuContainer isOpen={isOpen}>
      <GnbHeader goBack={false} />
      <MenuContents>
        <UserProfile />
        <Nav />
      </MenuContents>
    </MenuContainer>
  );
}

const MenuContainer = styled.aside<MenuProps>`
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding: 0 3vw;
  background-color: white;
  transition: right 0.3s;
  overflow-y: auto;

  scrollbar-width: none; /* Firefox 용 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE/Edge 용 스크롤바 숨김 */
  &::-webkit-scrollbar {
    /* Webkit (Safari, Chrome) 용 스크롤바 숨김 */
    width: 0px;
  }
`;

const MenuContents = styled.div``;
export default Menu;
