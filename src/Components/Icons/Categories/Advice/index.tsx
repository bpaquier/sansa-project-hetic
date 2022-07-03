import React from "react";

import Svg, { Path, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Advice({
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 58 58" fill="none">
      <Rect x="1" y="1" width="56" height="56" rx="28" fill="#DE945C" />
      <Path
        d="M29 29C32.2812 29 35 26.3281 35 23C35 19.7188 32.2812 17 29 17C25.6719 17 23 19.7188 23 23C23 26.3281 25.6719 29 29 29ZM33.4531 30.5469L31.25 39.5L29.75 33.125L31.25 30.5H26.75L28.25 33.125L26.75 39.5L24.5 30.5469C21.125 30.6875 18.5 33.4531 18.5 36.8281V38.75C18.5 40.0156 19.4844 41 20.75 41H37.25C38.4688 41 39.5 40.0156 39.5 38.75V36.8281C39.5 33.4531 36.8281 30.6875 33.4531 30.5469Z"
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
