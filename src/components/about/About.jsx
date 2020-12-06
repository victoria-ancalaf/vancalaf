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
    <AboutContainer name="about">
      <AboutContent>
        <AboutP>
          Desarrolladora Front-End y Traductora Inglés-Español de profesión.
          Tengo gran interés en adquirir nuevos conocimientos y busco la forma
          de desafiarme a mi misma, para ver que tan lejos puedo llegar, de esta
          forma puedo demostrar mi perseverancia, adaptabilidad, honestidad y
          trabajo colaborativo.
        </AboutP>
      </AboutContent>
      <AboutPhoto>
        <PhotoVi alt="Victoria"></PhotoVi>
      </AboutPhoto>
    </AboutContainer>
  );
};

export default About;
