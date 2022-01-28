//@ts-ignore
import styled from "styled-components/native";

interface StyledViewProps {
  height: string;
  width: string;
}

export const StyledView = styled.View`
  width: ${(props: StyledViewProps) => props.width}px;
  height: ${(props: StyledViewProps) => props.height}px;
`;
