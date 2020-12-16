import styled from "styled-components";
import Welcome from "../../img/welcome-bg.png";

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fbf8ff;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const WelcomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${Welcome});
  background-repeat: round;
  background-size: contain;

  @media screen and (max-width: 768px) {
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const WelcomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WelcomeH1 = styled.h1`
  font-family: "Sarabun", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  font-size: 4rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const WelcomeH2 = styled.h2`
  font-family: "Sarabun", sans-serif;
  font-weight: 100;
  color: #fff;
  font-size: 29px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
