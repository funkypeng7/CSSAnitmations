import { FC } from "react";
import styled from "styled-components";

export const Container = styled.div`
  h1 {
    padding: 25px 25px;
  }
  height: 960;
`;

type ColorChangeButtonProps = {
  colorTo?: string;
  transitionDelay?: string;
};

export const ColorChangeButton = styled.button<ColorChangeButtonProps>`
  height: 90px;
  width: 290px;

  margin: 25px 25px;

  font-size: 28px;
  color: white;
  border: none;
  background-color: blue;

  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: ${(props) => props.transitionDelay || "0s"};

  :hover {
    background-color: ${(props) => props.colorTo || "green"};
  }
`;

type TransformDivProps = {
  transitionFunction: string;
};
export const TransformDiv = styled.div<TransformDivProps>`
  margin: 2em;
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  background-color: red;
  color: #fff;
  line-height: 50px;
  text-align: center;
  border-radius: 0.5em;
  font-size: 20px;
  transition-property: translate();
  transition-duration: 3s;
  transition-timing-function: ${(props) => props.transitionFunction};

  :hover {
    transform: translate(900px, 0);
  }
`;
