import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutP,
  AboutPhoto,
  PhotoVi,
  AboutTitle
} from "./AboutElements";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <AboutContainer name="about">
      <AboutContent>
        <AboutP>{t("about.about-paragraph")}</AboutP>
      </AboutContent>
      <AboutPhoto>
      <AboutTitle>{t("navlinks.about-me")}</AboutTitle>
        <PhotoVi alt="Victoria"></PhotoVi>
      </AboutPhoto>
    </AboutContainer>
  );
};

export default About;
