import React, { ReactNode } from "react";
import { TextContainer } from "./styles";
import { useFonts } from "expo-font";

export interface TextComponentProps {
  type?: "titleXL" | "titleL" | "titleM" | "paragraph" | "small";
  weight?: "bold" | "regular" | "semi-bold" | "medium";
  color?: "black" | "white";
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
  });

  if (!loaded) {
    return null;
  }

  return (
    <TextContainer fontFamily="Helvetica" {...{ type, weight, color }}>
      {children}
    </TextContainer>
  );
};

export default TextComponent;

TextComponent.defaultProps = {
  type: "paragraph",
  weight: "regular",
};
