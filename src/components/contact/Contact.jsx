import React from "react";
import {
  ContactContainer,
  ContactMail,
  ContactLinks,
  ContactH3,
  ContactBtn,
  ContactH3Dark,
  ContactIcons,
  LinkedinIcon,
  GithubIcon,
  ContainerMail,
  ContainerLinks,
} from "./ContactElements";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <ContactContainer name="contact">
      <ContactMail>
        <ContainerMail>
          <ContactH3>{t("contact.contact-mail")}</ContactH3>
          <a href="mailto:viancalaf@gmail.com">
            <ContactBtn whileHover={{ scale: 1.05 }}>
              {t("contact.contact-btn")}
            </ContactBtn>
          </a>
        </ContainerMail>
      </ContactMail>
      <ContactLinks>
        <ContainerLinks>
          <ContactH3Dark>{t("contact.contact-links")}</ContactH3Dark>
          <ContactIcons>
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
          </ContactIcons>
        </ContainerLinks>
      </ContactLinks>
    </ContactContainer>
  );
};

export default Contact;
