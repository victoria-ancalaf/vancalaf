import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutP,
  AboutPhoto,
  PhotoVi,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          tellus a mi semper fringilla. Nam eu velit et enim cursus rutrum.
          Pellentesque id felis sagittis neque pretium sagittis ut vitae augue.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </AboutP>
      </AboutContent>
      <AboutPhoto>
        <PhotoVi alt="Victoria y Limón"></PhotoVi>
      </AboutPhoto>
    </AboutContainer>
  );
};

export default About;
