import React from "react";
import {
  ProjectsContainer,
  ProjectsCardContainer,
  ProjectCard,
  ProjectImage,
  Pokemon,
  CoffeeQueen,
  ComidaParaTodos,
  MdLinks,
  ProjectDescription,
  DescriptionP,
  DescriptionContainerBtn,
  DescriptionBtn,
  DescriptionBtnLight,
} from "./ProjectsElements";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <ProjectsContainer name="projects">
      <ProjectsCardContainer>
      <ProjectCard>
        <ProjectImage>
          <Pokemon />
        </ProjectImage>
        <ProjectDescription>
          <DescriptionP>
            Buscador Pokémon o Pokédex. Contiene el listado de 251 Pokémon,
            correspondientes a la región de Kanto y Johto.
          </DescriptionP>
          <DescriptionContainerBtn>
            <Link
              to={{
                pathname:
                  "https://github.com/victoria-ancalaf/SCL014-data-lovers",
              }}
              target="_blank"
            >
              <DescriptionBtnLight>GitHub</DescriptionBtnLight>
            </Link>
            <Link
              to={{
                pathname:
                  "https://victoria-ancalaf.github.io/SCL014-data-lovers/src/",
              }}
              target="_blank"
            >
              <DescriptionBtn>Demo</DescriptionBtn>
            </Link>
          </DescriptionContainerBtn>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage>
          <CoffeeQueen />
        </ProjectImage>
        <ProjectDescription>
          <DescriptionP>
            Web app para tomar pedidos desde una tablet y que estos sean
            enviados a cocina, para que se preparen ordenada y eficientemente.
          </DescriptionP>
          <DescriptionContainerBtn>
            <Link
              to={{
                pathname: "https://github.com/victoria-ancalaf/Coffee-Queen",
              }}
              target="_blank"
            >
              <DescriptionBtnLight>GitHub</DescriptionBtnLight>
            </Link>
            <Link
              to={{
                pathname: "https://coffe-queen.web.app/",
              }}
              target="_blank"
            >
              <DescriptionBtn>Demo</DescriptionBtn>
            </Link>
          </DescriptionContainerBtn>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage>
          <ComidaParaTodos />
        </ProjectImage>
        <ProjectDescription>
          <DescriptionP>
            Propuesta de mejora al sitio web de Comida Para Todos. Trabajo en
            conjunto con equipos interdisciplinarios (UX/Front-End)
          </DescriptionP>
          <DescriptionContainerBtn>
            <Link
              to={{
                pathname: "https://github.com/victoria-ancalaf/CPT",
              }}
              target="_blank"
            >
              <DescriptionBtnLight>GitHub</DescriptionBtnLight>
            </Link>
            <Link
              to={{
                pathname: "https://comida-para-todos-644ce.web.app/",
              }}
              target="_blank"
            >
              <DescriptionBtn>Demo</DescriptionBtn>
            </Link>
          </DescriptionContainerBtn>
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage>
          <MdLinks />
        </ProjectImage>
        <ProjectDescription>
          <DescriptionP>
            Librería JS para leer y analizar archivos en formato Markdown.
            Verifica los links encontrados y reporta estadísticas.
          </DescriptionP>
          <DescriptionContainerBtn>
            <Link
              to={{
                pathname: "https://github.com/victoria-ancalaf/SCL014-md-links",
              }}
              target="_blank"
            >
              <DescriptionBtnLight>GitHub</DescriptionBtnLight>
            </Link>
            <Link
              to={{
                pathname: "https://www.npmjs.com/package/md-links-vancalaf",
              }}
              target="_blank"
            >
              <DescriptionBtn>Demo</DescriptionBtn>
            </Link>
          </DescriptionContainerBtn>
        </ProjectDescription>
      </ProjectCard>
      </ProjectsCardContainer>
    </ProjectsContainer>
  );
};

export default Projects;
