import { StyledText, StyledView } from "./styles";

interface AboutProps {
  text?: string;
}

export default function About({ text }: AboutProps): JSX.Element {
  return (
    <StyledView>
      <StyledText color="white">{text}</StyledText>
    </StyledView>
  );
}
