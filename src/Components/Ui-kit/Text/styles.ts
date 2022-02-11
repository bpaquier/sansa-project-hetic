//@ts-ignore
import styled from "styled-components/native";
import { TextComponentProps } from "./index";
import theme from "~/Styles/theme.styles";

const { fontSizes } = theme;

interface TextContainerProps {
  fontFamily: string;
  type: TextComponentProps["type"];
  weight: TextComponentProps["weight"];
  color: TextComponentProps["color"];
}

export const TextContainer = styled.Text`
  font-family: ${({ fontFamily }: TextContainerProps) => fontFamily};
  font-size: ${({ type }: TextContainerProps) => type && fontSizes[type]};
  font-weight: ${({ weight, type }: TextComponentProps) => {
    switch (type) {
      case "titleXL":
        return "bold";
      case "titleM":
      case "titleL":
        return "600";
      case "paragraph":
      case "small":
        return weight;
    }
  }};
  color: ${({ color }: TextContainerProps) => color || "black"};
`;
