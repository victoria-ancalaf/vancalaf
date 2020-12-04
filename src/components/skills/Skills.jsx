import React from "react";
import {
  SkillsContainer,
  IconContainer,
  JsIcon,
  SkillH1,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  GitIcon,
  GithubIcon,
  FigmaIcon,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer name='skills'>
      <IconContainer>
        <JsIcon />
        <SkillH1>JavaScript</SkillH1>
      </IconContainer>
      <IconContainer>
        <HtmlIcon />
        <SkillH1>HTML5</SkillH1>
      </IconContainer>
      <IconContainer>
        <CssIcon />
        <SkillH1>CSS3</SkillH1>
      </IconContainer>
      <IconContainer>
        <ReactIcon />
        <SkillH1>React</SkillH1>
      </IconContainer>
      <IconContainer>
        <GitIcon />
        <SkillH1>Git</SkillH1>
      </IconContainer>
      <IconContainer>
        <GithubIcon />
        <SkillH1>GitHub</SkillH1>
      </IconContainer>
      <IconContainer>
        <FigmaIcon />
        <SkillH1>Figma</SkillH1>
      </IconContainer>
    </SkillsContainer>
  );
};

export default Skills;
