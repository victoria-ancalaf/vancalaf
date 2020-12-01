import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavTranslate,
  NavEnEs,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">VA</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">Acerca de mí</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills">Habilidades</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Proyectos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contacto</NavLinks>
            </NavItem>
          </NavMenu>
          <NavTranslate>
              <NavEnEs>ES | EN</NavEnEs>
            </NavTranslate>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
