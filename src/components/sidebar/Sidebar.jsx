import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarTranslation,
  ContainerBtns,
  NavEnEs,
  BtnTranslation,
  SidebarMenu,
  SidebarBtn,
  LinkedinIcon,
  GithubIcon,
} from "./SidebarElements";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Sidebar = ({ isOpen, toggle }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarTranslation>
          <ContainerBtns>
            <BtnTranslation onClick={() => i18next.changeLanguage("es")}>
              ES
            </BtnTranslation>
            <NavEnEs>|</NavEnEs>
            <BtnTranslation onClick={() => i18next.changeLanguage("en")}>
              EN
            </BtnTranslation>
          </ContainerBtns>
        </SidebarTranslation>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            {t("navlinks.about-me")}
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            {t("navlinks.skills")}
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            {t("navlinks.projects")}
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            {t("navlinks.contact")}
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
