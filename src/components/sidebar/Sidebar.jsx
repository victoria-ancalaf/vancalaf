import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtn,
  LinkedinIcon,
  GithubIcon,
} from "./SidebarElements";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Acerca de mí
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Habilidades
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Proyectos
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/victoria-ancalaf/",
            }}
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
          <Link
            to={{
              pathname: "https://github.com/victoria-ancalaf",
            }}
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
