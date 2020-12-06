import styled from "styled-components";
import Vi from "../../img/Vi.jpg";
import Victoria from "../../img/Victoria.jpg";

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #fbf8ff;

  @media screen and (max-width: 768px) {
    /* flex-direction: column-reverse;
    justify-content: space-around; */
    flex-wrap: wrap-reverse;
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
    padding: 0 30px;
  }
`;

export const AboutP = styled.p`
  font-family: "Sarabun", sans-serif;
  font-weight: 200;
  font-size: 20px;
  color: #3b2884;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 280px;
    align-items: center;
  }
`;

export const AboutPhoto = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: flex-end;
    padding: 0;
  }
`;

export const PhotoVi = styled.div`
  width: 242px;
  height: 242px;
  border-radius: 50%;
  background-image: url(${Victoria});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:hover {
    background-image: url(${Vi});
    transition: ease;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
