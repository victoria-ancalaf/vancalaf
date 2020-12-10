import styled from "styled-components";
import Poke from "../../img/Pokemon.png";
import Coffee from "../../img/queen.png";
import Comida from "../../img/comida.png";
import Node from "../../img/node.png";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background: #fbf8ff;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    padding-top: 200px;
    margin: 0px;
  }
`;

export const ProjectCard = styled.div`
  width: 350px;
  height: 350px;
  background: #9e7fe7;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 290px;
    height: 350px;
    margin: 25px;
  }
`;

export const ProjectImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const Pokemon = styled.img.attrs({
  src: `${Poke}`,
})`
  width: 245px;
  height: 150px;
`;

export const CoffeeQueen = styled.img.attrs({
  src: `${Coffee}`,
})`
  width: 224px;
  height: 163px;
`;

export const ComidaParaTodos = styled.img.attrs({
  src: `${Comida}`,
})`
  width: 245px;
  height: 150px;
`;

export const MdLinks = styled.img.attrs({
  src: `${Node}`,
})`
  width: 245px;
  height: 150px;
`;

export const ProjectDescription = styled.div`
  width: 100%;
  height: 50%;
  background: #fefedf;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const DescriptionP = styled.p`
  font-family: "Sarabun", sans-serif;
  font-size: 16px;
  color: #4931a2;
  padding: 15px;
`;

export const DescriptionContainerBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const DescriptionBtn = styled.button`
  width: 90px;
  height: 40px;
  background: #9e7fe7;
  border-radius: 5px;
  border-style: none;
  color: #ffffff;
  font-family: "Sarabun", sans-serif;
  font-size: 19px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #5f36bf;
  }
`;

export const DescriptionBtnLight = styled(DescriptionBtn)`
  background-color: transparent;
  border: 2px solid #5f36bf;
  color: #5f36bf;

  &:hover {
    background: #5f36bf;
    color: #ffffff;
  }
`;
