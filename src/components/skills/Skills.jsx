import React from "react";
import {
  SkillsContainer,
  SkillsIconContainer,
  IconContainer,
  JsIcon,
  SkillH1,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  GitIcon,
  GithubIcon,
  FigmaIcon,
  SkillsBg1,
  SkillsBg2,
  SkillsBg3,
  SkillsTitle,
} from "./SkillsElements";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <SkillsContainer name="skills">
      <SkillsTitle>{t("navlinks.skills")}</SkillsTitle>
      <SkillsIconContainer>
        <SkillsBg1 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <JsIcon />
            <SkillH1>JavaScript</SkillH1>
          </IconContainer>
        </SkillsBg1>
        <SkillsBg2 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <HtmlIcon />
            <SkillH1>HTML5</SkillH1>
          </IconContainer>
        </SkillsBg2>
        <SkillsBg3 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <CssIcon />
            <SkillH1>CSS3</SkillH1>
          </IconContainer>
        </SkillsBg3>
        <SkillsBg1 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <ReactIcon />
            <SkillH1>React</SkillH1>
          </IconContainer>
        </SkillsBg1>
        <SkillsBg1 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <GitIcon />
            <SkillH1>Git</SkillH1>
          </IconContainer>
        </SkillsBg1>
        <SkillsBg3 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <GithubIcon />
            <SkillH1>GitHub</SkillH1>
          </IconContainer>
        </SkillsBg3>
        <SkillsBg2 whileHover={{ scale: 1.2 }}>
          <IconContainer>
            <FigmaIcon />
            <SkillH1>Figma</SkillH1>
          </IconContainer>
        </SkillsBg2>
      </SkillsIconContainer>
    </SkillsContainer>
  );
};

export default Skills;
