import styled from "styled-components";
import Video from "../../video/video.gif";


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
  background-image: url(${Video});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 64%;

  @media screen and (max-width: 768px) {
    opacity: 90%;
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
  font-family: "Thasadith", sans-serif;
  font-style: normal;
  font-weight: 100;
  color: #4931a2;
  font-size: 4rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
    color: #fbf8ff;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    color: #fbf8ff;
  }
`;

export const WelcomeH2 = styled.h2`
  font-family: "Sarabun", sans-serif;
  font-weight: 100;
  color: #5f36bf;
  font-size: 29px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
    color: #fbf8ff;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    color: #fbf8ff;
  }
`;
