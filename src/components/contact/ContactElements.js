import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #fbf8ff;
`;

export const ContactMail = styled.div`
  display: flex;
  width: 50%;
  background: #3b2884;
`;

export const ContactH3 = styled.h3`
  font-family: "Sarabun", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #fbf8ff;
`;

export const ContactBtn = styled.button`
  width: 150px;
  height: 50px;
  background: #9e7fe7;
  border-radius: 5px;
  border-style: none;
  font-family: "Sarabun", sans-serif;
  font-size: 23px;
  color: #ffffff;
`;

export const ContactLinks = styled.div`
  display: flex;
  width: 50%;
  background: #fbf8ff;
`;

export const ContactH3Dark = styled.h3`
  font-family: "Sarabun", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #9e7fe7;
  text-align: center;
`;

export const ContactIcons = styled.div`
  
`;

export const LinkedinIcon = styled(FaLinkedin)`
  width: 60px;
  height: 60px;
  color: #9e7fe7;
`;

export const GithubIcon = styled(FaGithubSquare)`
  width: 60px;
  height: 60px;
  color: #9e7fe7;
`;

export const CvIcon = styled(IoDocumentAttach)`
  width: 60px;
  height: 60px;
  color: #9e7fe7;
`;
