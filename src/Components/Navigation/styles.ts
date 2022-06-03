import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";
const { shape, grid } = Theme;

export const Nav = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 50px;
  flex-direction: row;
  justify-content: space-around;
  background-color: grey;
`;

export const NavBorne = styled.View`
  position: absolute;
  bottom: ${grid.borneGutter}px;
  top: ${grid.borneGutter}px;
  width: ${getColumnWidth(2, false)};
  left: ${grid.borneGutter}px;
  justify-content: space-around;
  background-color: grey;
  border-radius: ${shape?.radius?.input}px;
`;
