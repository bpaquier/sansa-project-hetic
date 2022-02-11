import styled from "styled-components/native";

interface StyledTextProps {
  color: string;
}

export const StyledText = styled.Text`
  color: ${(props: StyledTextProps) => props.color || "black"};
`;
