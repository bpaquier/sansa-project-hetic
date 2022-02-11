import React, { ReactNode } from "react";
import { TextContainer } from "./styles";
import { useFonts } from "expo-font";

export interface TextComponentProps {
  type?: "titleXL" | "titleL" | "titleM" | "paragraph" | "small";
  weight?: "bold" | "regular" | "medium";
  color?: "black" | "white" | "orange";
  children?: React.ReactNode | ReactNode[];
}

const TextComponent = ({
  type,
  children,
  color,
  weight,
}: TextComponentProps) => {
  const [loaded] = useFonts({
    Helvetica: require("~/../assets/fonts/HelveticaNeueCyr.ttf"),
    HelveticaMedium: require("~/../assets/fonts/HelveticaNeueCyr-Medium.ttf"),
    HelveticaBold: require("~/../assets/fonts/HelveticaNeueCyr-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <TextContainer {...{ type, weight, color }}>{children}</TextContainer>;
};

export default TextComponent;

TextComponent.defaultProps = {
  type: "paragraph",
  weight: "regular",
  color: "black",
};
