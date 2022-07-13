import styled from "styled-components/native";

interface StyledViewProps {
  height: number;
  width: number;
}

export const SafeArea = styled.View`
  width: ${(props: StyledViewProps) => props.width}px;

  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
`;

export const PageContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
