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

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`;

export const SkillH1 = styled.h1`
  font-family: "Sarabun", sans-serif;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: #fbf8ff;
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    font-weight: 400;
  }
`;

export const JsIcon = styled(SiJavascript)`
  width: 70px;
  height: 70px;
  color: #fefedf;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const HtmlIcon = styled(SiHtml5)`
  width: 70px;
  height: 70px;
  color: #fbf8ff;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CssIcon = styled(SiCss3)`
  width: 70px;
  height: 70px;
  color: #fefedf;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ReactIcon = styled(SiReact)`
  width: 70px;
  height: 70px;
  color: #fbf8ff;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const GitIcon = styled(SiGit)`
  width: 70px;
  height: 70px;
  color: #fefedf;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const GithubIcon = styled(SiGithub)`
  width: 70px;
  height: 70px;
  color: #fbf8ff;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const FigmaIcon = styled(SiFigma)`
  width: 70px;
  height: 70px;
  color: #fefedf;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
