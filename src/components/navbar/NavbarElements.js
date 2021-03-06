import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ scrollNav }) =>
    scrollNav ? "#5F36BF" : "rgba(95, 54, 191, 0.3)"};
  height: 80px;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fbf8ff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  text-decoration: none;
  font-family: "Thasadith", sans-serif;
  background: #9e7fe7;
  width: 54px;
  height: 54px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #9e7fe7;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  font-family: "Sarabun", sans-serif;
  font-size: 1.25rem;
  color: #fbf8ff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid #fefedf;
  }
`;

export const NavTranslate = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavEnEs = styled.div`
  font-family: "Sarabun", sans-serif;
  font-size: 1rem;
  color: #fbf8ff;
`;

export const BtnTranslation = styled.button`
  cursor: pointer;
  background: transparent;
  border-style: none;
  font-family: "Sarabun", sans-serif;
  font-size: 1rem;
  color: #fbf8ff;
`;
