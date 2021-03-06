import styled from "styled-components/native";

import { TextComponentProps as TextComponentPropsIndex } from "./index";
import theme from "~/Styles/theme.styles";

type TextComponentProps = TextComponentPropsIndex & {
  isMobile?: boolean;
  underline?: boolean;
};

const { fontSizes, color: themeColor, fontFamily } = theme;

export const TextContainer = styled.Text`
  font-family: ${({ weight, type, isMobile }: TextComponentProps) => {
    switch (type) {
      case "titleXL":
        return fontFamily?.bold;
      case "titleL":
        return isMobile ? fontFamily?.bold : fontFamily?.medium;
      case "titleM":
        return fontFamily?.medium;
      case "paragraph":
      case "small":
      default:
        return weight ? fontFamily[weight] : fontFamily?.regular;
    }
  }};
  font-size: ${({ type }: TextComponentProps) =>
    type ? fontSizes[type] : fontSizes?.paragraph};
  color: ${({ color }: TextComponentProps) => {
    switch (color) {
      case "white":
        return themeColor?.primary?.white;
      case "orange":
        return themeColor?.primary?.orange;
      case "blue":
        return themeColor?.primary?.blue;
      case "grey":
        return themeColor?.neutral?.black60;
      case "black40":
        return themeColor?.neutral?.black40;
      case "black20":
        return themeColor?.neutral?.black20;
      case "darkBlue":
        return themeColor?.primary?.blueDark;
      case "red":
        return themeColor?.semantic?.dangerText;
      case "black60":
        return themeColor?.neutral?.black60;
      case "warning":
        return themeColor?.semantic?.warningText;
      case "success":
        return themeColor?.semantic.successText;
      case "black":
      default:
        return themeColor?.neutral?.black100;
    }
  }};
  text-align: ${({ textAlign }: TextComponentProps) => textAlign};
  ${({ type, isMobile }: TextComponentProps) => {
    if (type === "paragraph" || type === "titleM") return "line-height: 24px";
    if (type === "titleXL") return "line-height: 40px";
    if (type === "titleL") return "line-height: 30px";
    if (type === "small" && !isMobile) return "line-height: 24px";
  }};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
`;
