import styled from "styled-components/native";

interface StyledViewProps {
  height: number;
  width: number;
}

export const SafeArea = styled.View`
  bottom: 0;
  width: ${(props: StyledViewProps) => props.width}px;
  top: 0;
  position: absolute;
  align-items: center;
`;

export const PageContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
