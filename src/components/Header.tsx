import React from "react";

// 타입 선언
type HeaderProps = {
    menuArray: string[];
}

const Header:React.FC<HeaderProps> = ({menuArray}) => {
  return (
    <ul>
        {menuArray.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
  );
}

export default Header;