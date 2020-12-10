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
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <ProjectsContainer name="projects">
      <ProjectsCardContainer>
        <ProjectCard>
          <ProjectImage>
            <Pokemon />
          </ProjectImage>
          <ProjectDescription>
            <DescriptionP>{t("projects.pokemon-project")}</DescriptionP>
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
            <DescriptionP>{t("projects.burger-queen-project")}</DescriptionP>
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
            <DescriptionP>{t("projects.cpt-project")}</DescriptionP>
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
            <DescriptionP>{t("projects.md-links-project")}</DescriptionP>
            <DescriptionContainerBtn>
              <Link
                to={{
                  pathname:
                    "https://github.com/victoria-ancalaf/SCL014-md-links",
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
