import {
  BaseDiv,
  Container,
  ScaleDiv,
  TransformDiv,
  RotateDiv,
  SkewDiv,
} from "../2_Transforms/Transforms.styles";

const Transforms = () => {
  return (
    <Container>
      <h1>Transforms</h1>
      <ScaleDiv>Scale me</ScaleDiv>
      <TransformDiv>Translate me</TransformDiv>
      <RotateDiv>Rotate me</RotateDiv>
      <SkewDiv>Skew me</SkewDiv>
    </Container>
  );
};

export default Transforms;
