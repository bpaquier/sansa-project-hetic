import styled from "styled-components/native";

interface StyledViewProps {
  height: number;
  width: number;
}

export const SafeArea = styled.View`
  width: ${(props: StyledViewProps) => props.width}px;
  height: ${(props: StyledViewProps) => props.height}px;
  position: absolute;
  bottom: 0;
  align-items: center;
`;

export const PageContent = styled.View`
  width: 100%;
  height: 100%;
`;
