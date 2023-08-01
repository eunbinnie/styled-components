import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 100;
`;

const StyledLink = styled.a`
  font-weight: bold;
  cursor: pointer;
  color: #000;
`;

// 타입 선언
type HeaderProps = {
    menuArray: {
      url: string,
      text: string
    }[];
}

const Header:React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
        {props.menuArray.map((menu, index) => (
          <li key={index}>
            <StyledLink href={menu.url}>{menu.text}</StyledLink>
          </li>
        ))}
    </StyledHeader>
  );
}

export default Header;