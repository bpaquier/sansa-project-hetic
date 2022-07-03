import React from "react";

import Svg, { Path, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Health({
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 58 58" fill="none">
      <Rect x="1" y="1" width="56" height="56" rx="28" fill="#99BC96" />
      <Path
        d="M37.0312 22.875H33.75V20.9062C33.75 19.8398 32.8477 18.9375 31.7812 18.9375H25.2188C24.1113 18.9375 23.25 19.8398 23.25 20.9062V22.875H19.9688C18.8613 22.875 18 23.7773 18 24.8438V36.6562C18 37.7637 18.8613 38.625 19.9688 38.625H37.0312C38.0977 38.625 39 37.7637 39 36.6562V24.8438C39 23.7773 38.0977 22.875 37.0312 22.875ZM25.875 21.5625H31.125V22.875H25.875V21.5625ZM32.4375 31.7344C32.4375 31.9395 32.2734 32.0625 32.1094 32.0625H29.8125V34.3594C29.8125 34.5645 29.6484 34.6875 29.4844 34.6875H27.5156C27.3105 34.6875 27.1875 34.5645 27.1875 34.3594V32.0625H24.8906C24.6855 32.0625 24.5625 31.9395 24.5625 31.7344V29.7656C24.5625 29.6016 24.6855 29.4375 24.8906 29.4375H27.1875V27.1406C27.1875 26.9766 27.3105 26.8125 27.5156 26.8125H29.4844C29.6484 26.8125 29.8125 26.9766 29.8125 27.1406V29.4375H32.1094C32.2734 29.4375 32.4375 29.6016 32.4375 29.7656V31.7344Z"
        fill="white"
      />
      <Rect
        x="1"
        y="1"
        width="56"
        height="56"
        rx="28"
        stroke="#002D4B"
        stroke-width="2"
      />
    </Svg>
  );
}
