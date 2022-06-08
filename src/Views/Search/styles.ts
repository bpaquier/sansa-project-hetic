import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { grid } = theme;

export const Content = styled.View`
  width: 100%;
  height: 300px;
  background-color: blue;
`;

export const CustomButton = styled.Pressable`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
  bottom: ${grid?.borneGutter}px;
  right: ${grid?.borneGutter}px;
`;
