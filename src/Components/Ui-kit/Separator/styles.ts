import styled from "styled-components/native";

import { SeparatorProps } from "./index";
import { gridColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, grid } = theme;

export const StyledView = styled.View`
  background-color: ${({ theme }: SeparatorProps) => {
    switch (theme) {
      case "dark":
        return color?.neutral?.black10;
      case "light":
      default:
        return color?.primary?.white;
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
  ${({ orientation, columnWidth }: SeparatorProps) => {
    switch (orientation) {
      case "vertical":
        return "width: 1px";
      case "horizontal":
      default:
        return gridColumnWidth(columnWidth ?? grid?.columns / 2);
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
