import React from "react";

import Svg, { Path, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Technology({
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 58 58" fill="none">
      <Rect x="1.00002" y="1" width="56" height="56" rx="28" fill="#233454" />
      <Path
        d="M43.7188 24.2656C35.4219 16.625 22.5313 16.625 14.2344 24.2656C13.9063 24.5938 13.9063 25.0625 14.1875 25.3438L15.7813 26.9375C16.1094 27.2188 16.5781 27.2656 16.8594 26.9844C23.7031 20.7031 34.25 20.7031 41.0938 26.9844C41.4219 27.2656 41.8438 27.2188 42.1719 26.9375L43.7656 25.3438C44.0469 25.0625 44.0469 24.5938 43.7188 24.2656ZM29 33.5C27.3125 33.5 26 34.8594 26 36.5C26 38.1875 27.3125 39.5 29 39.5C30.6406 39.5 32 38.1875 32 36.5C32 34.8594 30.6406 33.5 29 33.5ZM38.4688 29.6094C33.0781 24.8281 24.875 24.8281 19.4844 29.6094C19.1563 29.8906 19.1563 30.4062 19.4375 30.6875L21.0781 32.2812C21.3594 32.5625 21.7813 32.5625 22.1094 32.3281C26.0469 28.9062 31.9063 28.9062 35.8438 32.3281C36.1719 32.5625 36.5938 32.5625 36.875 32.2812L38.5156 30.6875C38.7969 30.4062 38.7969 29.8906 38.4688 29.6094Z"
        fill="white"
      />
      <Rect
        x="1.00002"
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
