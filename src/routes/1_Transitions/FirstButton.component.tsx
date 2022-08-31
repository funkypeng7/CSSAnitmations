import {
  ColorChangeButton,
  Container,
  TransformDiv,
} from "./FirstButton.styles";

const FirstButton = () => {
  return (
    <Container>
      <h1>Color Changing</h1>
      <ColorChangeButton colorTo="green">To Green</ColorChangeButton>
      <br />
      <ColorChangeButton colorTo="purple">To Purple</ColorChangeButton>
      <br />
      <ColorChangeButton colorTo="purple" transitionDelay="1s">
        To Purple After 1 sec
      </ColorChangeButton>
      <br />
      <TransformDiv transitionFunction="ease">Ease</TransformDiv>
      <TransformDiv transitionFunction="linear">Linear</TransformDiv>
      <TransformDiv transitionFunction="ease-in">Ease In</TransformDiv>
      <TransformDiv transitionFunction="ease-out">Ease Out</TransformDiv>
      <TransformDiv transitionFunction="ease-in-out">Ease In Out</TransformDiv>
    </Container>
  );
};

export default FirstButton;
