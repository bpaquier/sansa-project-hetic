import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";
const { color } = Theme;
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
  background-color: ${color?.neutral?.black5};
`;

export const PageContent = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
