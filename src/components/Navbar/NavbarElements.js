import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: rgb(13, 35, 70);
    display: flex;
    box-shadow: 0 0 1vw;
    border-bottom: 1px solid rgb(0, 17, 44);
    justify-content: space-between ;
    align-items: center;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    padding-top: 0.5vw;
    margin:0;
    height:100%;
    z-index: 12;
    position: -webkit-sticky;
    position: sticky;
    @media screen and (max-width: 1200px) {
      position: relative;
      top: 0;
      height: 6vw;
      display: flex;
      position: -webkit-sticky;
      position: sticky;
    }
    @media screen and (max-width: 768px) {
      position: relative;
      top: 0vw;
      height: 6vw;
      display: flex;
      position: -webkit-sticky;
      position: sticky;
    }
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  margin-left: 0;
  padding:0;
`;
export const NavLogoText = styled(Link)`
  cursor: pointer;
  font-family: 'Times New Roman';
  font-weight: 400;
  font-size: 1.3vw;
  text-decoration: none;
  color: black;  
  margin-left: 0.55vw;
  @media screen and (max-width: 768px) {
    margin-right: 45vw;
  }
`;
export const Font1 = styled(Link)`
  font-size: 1.2vw;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;
export const Font2 = styled(Link)`
  font-size: 1.1vw;
  text-decoration: none;
  color: white;
`;

export const NavLink = styled(Link)`
color: white;
font-weight: 500;
font-size: 1vw;
display: flex;
align-items: center;
text-align:center;
text-decoration: none;
padding: 1.8vw 1.3vw;
height: 100%;
cursor: pointer;

&.active {
  
  border-bottom: 0.3vw solid rgb(183, 206, 250);
}

&:hover {
  color: rgb(145, 196, 255);
}
&:link {
  color: white;
}

`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    margin-left: 50vw;
    margin-bottom: 6vw;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  overflow:hidden;
  margin-left: 7vw;
  
  @media screen and (max-width: 1024px) {
    margin-left:2vw;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: rgb(13, 35, 70);
  }
`;