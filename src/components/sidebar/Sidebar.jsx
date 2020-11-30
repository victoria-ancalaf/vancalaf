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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Acerca de mí</SidebarLink>
          <SidebarLink to="skills">Habilidades</SidebarLink>
          <SidebarLink to="projects">Proyectos</SidebarLink>
          <SidebarLink to="contact">Contacto</SidebarLink>
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
