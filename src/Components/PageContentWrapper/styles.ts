import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

export const PageContainerMobile = styled.ScrollView`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 50px ${grid.mobileGutter}px;
`;

export const PageContainerBorne = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${grid.borneGutter}px;
`;
