import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { grid, color } = theme;

interface ButtonProps {
  marginBottom: number;
  isMobile?: boolean;
}

export const ControlsBorne = styled.View`
  position: absolute;
  bottom: ${grid?.borneGutter}px;
  right: ${grid?.borneGutter}px;
  background-color: ${color?.primary.white};
  border-radius: 50px;
  padding: 16px;
`;

export const ControlsMobile = styled.View`
  position: absolute;
  bottom: ${grid?.mobileGutter}px;
  right: ${grid?.mobileGutter}px;
`;

export const Button = styled.TouchableOpacity`
  border: solid ${color?.primary?.blue} 2px;
  border-radius: 50px;
  width: ${({ isMobile }: ButtonProps) => (isMobile ? "30px" : "60px")};
  height: ${({ isMobile }: ButtonProps) => (isMobile ? "30px" : "60px")};
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ marginBottom }: ButtonProps) => `${marginBottom}px`};
`;
