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

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Acerca de mí</SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>Habilidades</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Proyectos</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contacto</SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <LinkedinIcon />
          <GithubIcon />
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
