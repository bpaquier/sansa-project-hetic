import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";
const { sizes, shape } = Theme;

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
  bottom: 10px;
  top: 10px;
  width: ${sizes?.navBorneWidth}px;
  left: 10px;
  justify-content: space-around;
  background-color: grey;
  border-radius: ${shape?.radius?.input}px;
`;
