import React from "react";

import { WelcomeContainer, WelcomeBg, VideoBg, WelcomeContent, WelcomeH1, WelcomeH2 } from "./WelcomeElements";

const Welcome = () => {
  return (
    <WelcomeContainer name='/'>
      <WelcomeBg>
        <VideoBg />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Victoria Ancalaf</WelcomeH1>
        <WelcomeH2>Front-End Developer</WelcomeH2>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;
