import React from "react";
import Video from "../../video/video.mp4";
import { WelcomeContainer, WelcomeBg, VideoBg, WelcomeContent, WelcomeH1, WelcomeH2 } from "./WelcomeElements";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Victoria Ancalaf</WelcomeH1>
        <WelcomeH2>Front-End Developer</WelcomeH2>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;
