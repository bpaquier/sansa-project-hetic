import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { grid, color } = theme;

interface ButtonProps {
  marginBottom?: number;
}

export const Controls = styled.View`
  position: absolute;
  bottom: ${grid?.borneGutter}px;
  right: ${grid?.borneGutter}px;
  background-color: ${color?.primary.white};
  border-radius: 50px;
  padding: 16px;
`;

export const Button = styled.TouchableOpacity`
  border: solid ${color?.primary?.blue} 2px;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ marginBottom }: ButtonProps) => `${marginBottom}px`};
`;
