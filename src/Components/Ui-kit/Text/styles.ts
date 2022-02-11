//@ts-ignore
import styled from "styled-components/native";
import { TextComponentProps } from "./index";
import theme from "~/Styles/theme.styles";

const { fontSize, color: themeColor, fontFamily } = theme;

interface TextContainerProps {
  //fontFamily: string;
  type: TextComponentProps["type"];
  weight: TextComponentProps["weight"];
  color: TextComponentProps["color"];
}

export const TextContainer = styled.Text`
  font-family: ${({ weight, type }: TextContainerProps) => {
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
  font-size: ${({ type }: TextContainerProps) =>
    type ? fontSize[type] : fontSize?.paragraph};
  color: ${({ color }: TextContainerProps) => {
    switch (color) {
      case "white":
        return themeColor?.primary?.white;
      case "orange":
        return themeColor?.primary?.orange;
      case "black":
      default:
        return themeColor?.neutral?.black100;
    }
  }};
`;
