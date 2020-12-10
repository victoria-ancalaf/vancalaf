import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavEnEs,
  NavTranslate,
  BtnTranslation,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            VA
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t("navlinks.about-me")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t("navlinks.skills")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t("navlinks.projects")}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {t("navlinks.contact")}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavTranslate>
            <BtnTranslation onClick={() => i18next.changeLanguage("es")}>
              ES
            </BtnTranslation>
            <NavEnEs>|</NavEnEs>
            <BtnTranslation onClick={() => i18next.changeLanguage("en")}>
               EN
            </BtnTranslation>
          </NavTranslate>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
