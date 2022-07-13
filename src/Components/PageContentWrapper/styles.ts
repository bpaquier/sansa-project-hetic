import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";

type PageContainerProps = {
  noPaddingX?: boolean;
  backgroundColor?: "grey" | "white" | "blue";
};

const { grid, color } = Theme;

export const PageContainerMobile = styled.ScrollView<PageContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 50px ${({ noPaddingX }) => `${noPaddingX ? 0 : grid.mobileGutter}px`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor === "white"
      ? color.primary.white
      : backgroundColor === "blue"
      ? color.primary.blue
      : color.components.backgroundApp};
  padding-top: 60px;
`;

export const PageContainerBorne = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${grid.borneGutter}px;
  background-color: ${color.components.backgroundApp};
`;
