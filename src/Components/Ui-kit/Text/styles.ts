import styled from "styled-components/native";

import { TextComponentProps } from "./index";
import theme from "~/Styles/theme.styles";

const { fontSize, color: themeColor, fontFamily } = theme;

export const TextContainer = styled.Text`
  font-family: ${({ weight, type }: TextComponentProps) => {
    switch (type) {
      case "titleXL":
        return fontFamily?.bold;
      case "titleM":
      case "titleL":
        return fontFamily?.medium;
      case "paragraph":
      case "small":
      default:
        return weight ? fontFamily[weight] : fontFamily?.regular;
    }
  }};
  font-size: ${({ type }: TextComponentProps) =>
    type ? fontSize[type] : fontSize?.paragraph};
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
      case "darkBlue":
        return themeColor?.primary?.blueDark;
      case "red":
        return themeColor?.semantic?.dangerText;
      case "black":
      default:
        return themeColor?.neutral?.black100;
    }
  }};
  text-align: ${({ textAlign }: TextComponentProps) => textAlign};
`;
