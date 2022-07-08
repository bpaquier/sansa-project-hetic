import styled from "styled-components/native";

import { SeparatorProps } from "./index";
import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, grid } = theme;

interface SeparatorStyleProps extends SeparatorProps {
  isMobile?: boolean;
  backgroundColor?: "blue";
}

export const StyledView = styled.View`
  background-color: ${({ theme, customColor }: SeparatorProps) => {
    if (customColor) {
      return customColor;
    } else {
      switch (theme) {
        case "dark":
          return color?.neutral?.black10;
        case "light":
        default:
          return color?.primary?.white;
      }
    }
  }};
  height: ${({ orientation, height }: SeparatorProps) => {
    switch (orientation) {
      case "vertical":
        return height;
      case "horizontal":
      default:
        return "1px";
    }
  }};
  width: ${({
    orientation,
    width,
    columnWidth,
    isMobile
  }: SeparatorStyleProps) => {
    switch (orientation) {
      case "vertical":
        return "1px";
      case "horizontal":
      default:
        return (
          width ||
          `${getColumnWidth(
            columnWidth ? columnWidth : grid?.columns / 2,
            isMobile ? isMobile : true
          )}px`
        );
    }
  }};
  ${({ orientation }: SeparatorProps) =>
    orientation === "horizontal" && "align-self: center;"};
  margin: ${({ orientation, margin }: SeparatorProps) => {
    if (margin) {
      switch (orientation) {
        case "vertical":
          return `0 ${margin}px`;
        case "horizontal":
          return `${margin}px 0`;
      }
    } else {
      return "0";
    }
  }};
`;
