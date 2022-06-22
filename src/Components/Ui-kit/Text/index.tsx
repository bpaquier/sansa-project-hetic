import React, { ReactNode } from "react";

import { useFonts } from "expo-font";

import { TextContainer } from "./styles";

export interface TextComponentProps {
  type?: "titleXL" | "titleL" | "titleM" | "paragraph" | "small";
  weight?: "bold" | "regular" | "medium";
  color?:
    | "black"
    | "white"
    | "orange"
    | "blue"
    | "grey"
    | "darkBlue"
    | "black40"
    | "black20"
    | "black60"
    | "red";
  children?: React.ReactNode | ReactNode[];
  textAlign?: "left" | "center" | "right";
}

const TextComponent = ({
  type,
  children,
  color,
  weight,
  textAlign = "left"
}: TextComponentProps) => {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Helvetica: require("~/../assets/fonts/HelveticaNeueCyr.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaMedium: require("~/../assets/fonts/HelveticaNeueCyr-Medium.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaBold: require("~/../assets/fonts/HelveticaNeueCyr-Bold.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <TextContainer {...{ type, weight, color, textAlign }}>
      {children}
    </TextContainer>
  );
};

export default TextComponent;

TextComponent.defaultProps = {
  type: "paragraph",
  weight: "regular",
  color: "black"
};
