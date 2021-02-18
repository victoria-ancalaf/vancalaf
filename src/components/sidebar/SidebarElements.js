import styled from "styled-components";
import { FaTimes, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #9e7fe7;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fbf8ff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fbf8ff;
`;

export const SidebarTranslation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 87px;
  height: 40px;
  border-radius: 5px;
  background-color: #fbf8ff;
`;

export const NavEnEs = styled.div`
  font-family: "Sarabun", sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #5F36BF;
`;

export const BtnTranslation = styled.button`
  cursor: pointer;
  background: transparent;
  border-style: none;
  font-family: "Sarabun", sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #5F36BF;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sarabun", sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fbf8ff;
  cursor: pointer;

  &:hover {
    transition: 0.2 ease-in-out;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  width: 50px;
  height: 50px;
  color: #fbf8ff;
`;

export const GithubIcon = styled(FaGithubSquare)`
  width: 50px;
  height: 50px;
  color: #fbf8ff;
`;
