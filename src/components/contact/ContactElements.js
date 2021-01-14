import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import CBg from "../../img/background.png";
import { motion } from "framer-motion";

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #fbf8ff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactMail = styled.div`
  display: flex;
  width: 50%;
  background: #9e7fe7;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60%;
  }
`;

export const ContainerMail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 145px;

  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 0 30px;
    justify-content: flex-start;
  }
`;

export const ContactH3 = styled.h3`
  font-family: "Sarabun", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #fbf8ff;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-weight: 200;
    font-size: 18px;
  }
`;

export const ContactBtn = styled(motion.button)`
  width: 150px;
  height: 50px;
  background: #5f36bf;
  border-radius: 5px;
  border-style: none;
  font-family: "Sarabun", sans-serif;
  font-size: 23px;
  color: #ffffff;
  margin-top: 48px;
  cursor: pointer;

  &:hover {
    background: #fefedf;
    color: #5f36bf;
  }

  @media screen and (max-width: 768px) {
    width: 130px;
    height: 40px;
    font-size: 18px;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  width: 50%;
  background: #fbf8ff;
  justify-content: center;
  background-image: url(${CBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 145px;

  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 0 30px;
  }
`;

export const ContactH3Dark = styled.h3`
  font-family: "Sarabun", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #5f36bf;
  text-align: center;
`;

export const ContactIcons = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    width: 200px;
    justify-content: space-evenly;
  }
`;

export const LinkedinIcon = styled(FaLinkedin)`
  width: 60px;
  height: 60px;
  color: #5f36bf;
  cursor: pointer;

  &:hover {
    color: #9e7fe7;
  }

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const GithubIcon = styled(FaGithubSquare)`
  width: 60px;
  height: 60px;
  color: #5f36bf;
  cursor: pointer;

  &:hover {
    color: #9e7fe7;
  }

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const ContactTitle = styled.h3`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-family: "Thasadith", sans-serif;
    font-size: 22px;
    font-weight: 100;
    width: 100%;
    text-align: center;
    color: #fbf8ff;
    padding: 80px;
  }
`;
