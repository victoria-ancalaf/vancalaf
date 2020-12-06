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

const Contact = () => {
  return (
    <ContactContainer name="contact">
      <ContactMail>
        <ContainerMail>
          <ContactH3>
            Si tienes alguna pregunta o necesitas contactarme, puedes escribirme
            a este correo electrónico:
          </ContactH3>
          <a href="mailto:viancalaf@gmail.com">
          <ContactBtn>Escribeme</ContactBtn>
          </a>
        </ContainerMail>
      </ContactMail>
      <ContactLinks>
        <ContainerLinks>
          <ContactH3Dark>
            O<br></br> visita estos links
          </ContactH3Dark>
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
