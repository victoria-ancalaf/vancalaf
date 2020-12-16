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
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer name="skills">
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
