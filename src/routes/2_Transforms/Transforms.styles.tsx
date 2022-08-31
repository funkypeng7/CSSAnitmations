import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const BaseDiv = styled.div`
  width: 150px;
  height: 150px;

  margin: 25px auto;
  line-height: 150px;

  font-size: 25px;
  color: white;
  background-color: blue;
  text-align: center;

  transition: transform;
  transition-duration: 2s;
`;

export const ScaleDiv = styled(BaseDiv)`
  :hover {
    transform: scale(1.25, 1.25);
  }
`;
export const TransformDiv = styled(BaseDiv)`
  :hover {
    transform: translateX(75px);
  }
`;

export const RotateDiv = styled(BaseDiv)`
  :hover {
    transform: rotate(2turn);
  }
`;

export const SkewDiv = styled(BaseDiv)`
  :hover {
    transform: skew(-30deg, 60deg);
  }
`;
