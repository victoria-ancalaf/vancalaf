import styled from "styled-components";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background: #9e7fe7;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SkillH1 = styled.h1`
  font-family: "Sarabun", sans-serif;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #FBF8FF;
  padding: 10px;
`;

export const JsIcon = styled(SiJavascript)`
  width: 70px;
  height: 70px;
  color: #FEFEDF;
`;

export const HtmlIcon = styled(SiHtml5)`
  width: 70px;
  height: 70px;
  color: #FBF8FF;
`;

export const CssIcon = styled(SiCss3)`
  width: 70px;
  height: 70px;
  color: #FEFEDF;
`;

export const ReactIcon = styled(SiReact)`
  width: 70px;
  height: 70px;
  color: #FBF8FF;
`;

export const GitIcon = styled(SiGit)`
  width: 70px;
  height: 70px;
  color: #FEFEDF;
`;

export const GithubIcon = styled(SiGithub)`
  width: 70px;
  height: 70px;
  color: #FBF8FF;
`;

export const FigmaIcon = styled(SiFigma)`
  width: 70px;
  height: 70px;
  color: #FEFEDF;
`;
