import React, { ReactNode } from "react";

import { useFonts } from "expo-font";
import i18next from "i18next";

import { TextContainer } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

export type TextTypeProps =
  | "titleXL"
  | "titleL"
  | "titleM"
  | "paragraph"
  | "small";
export type TextWeightProps = "bold" | "regular" | "medium";
export type TextColorsProps =
  | "black"
  | "white"
  | "orange"
  | "blue"
  | "grey"
  | "darkBlue"
  | "black40"
  | "black20"
  | "black60"
  | "red"
  | "warning";

export type TextAlignementProps = "left" | "center" | "right";
export interface TextComponentProps {
  children?: React.ReactNode | ReactNode[];
  customColor?: string;
  onLayout?: (e: any) => void;
  type?: TextTypeProps;
  weight?: TextWeightProps;
  color?: TextColorsProps;
  textAlign?: TextAlignementProps;
}

const TextComponent = ({
  type,
  children,
  color,
  weight,
  textAlign = "left",
  customColor,
  onLayout
}: TextComponentProps) => {
  const { language } = i18next;
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Helvetica: require("~/../assets/fonts/HelveticaNeueCyr.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaMedium: require("~/../assets/fonts/HelveticaNeueCyr-Medium.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaBold: require("~/../assets/fonts/HelveticaNeueCyr-Bold.ttf")
  });

  const { isMobile } = useGlobalContext();

  if (!loaded) {
    return null;
  }

  return (
    <TextContainer
      {...{
        type,
        isMobile,
        weight,
        color,
        customColor,
        onLayout,
        textAlign:
          textAlign === "left" && language === "ar-SA" ? "right" : textAlign
      }}
    >
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
