import { StyledText, StyledView } from "./styles";

interface HomePorps {}

export default function Home(props: HomePorps): JSX.Element {
  return (
    <StyledView>
      <StyledText color="teal">Home</StyledText>
    </StyledView>
  );
}
