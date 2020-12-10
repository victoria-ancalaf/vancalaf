import React from "react";
import {
  WelcomeContainer,
  WelcomeBg,
  VideoBg,
  WelcomeContent,
  WelcomeH1,
  WelcomeH2,
} from "./WelcomeElements";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <WelcomeContainer name="/">
      <WelcomeBg>
        <VideoBg />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Victoria Ancalaf</WelcomeH1>
        <WelcomeH2>{t("home.subtitle-home")}</WelcomeH2>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;
