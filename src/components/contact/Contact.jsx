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
  CvIcon,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer name="contact">
      <ContactMail>
        <ContactH3>
          Si tienes alguna pregunta o necesitas contactarme, puedes escribirme a
          este correo electrónico:
        </ContactH3>
        <ContactBtn>Escribeme</ContactBtn>
      </ContactMail>
      <ContactLinks>
        <ContactH3Dark>
          O<br></br> visita estos links
        </ContactH3Dark>
        <ContactIcons>
          <LinkedinIcon />
          <GithubIcon />
          <CvIcon />
        </ContactIcons>
      </ContactLinks>
    </ContactContainer>
  );
};

export default Contact;
