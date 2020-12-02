import styled from "styled-components";
import Vi from "../../img/Vi.jpg";

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #fbf8ff;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const AboutContent = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 145px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const AboutP = styled.p`
  font-family: "Sarabun", sans-serif;
  font-weight: 200;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const AboutPhoto = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const PhotoVi = styled.div`
  width: 242px;
  height: 242px;
  border-radius: 50%;
  background-image: url(${Vi});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
