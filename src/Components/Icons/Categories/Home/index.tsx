import React from "react";

import Svg, { Path, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Home({
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 58 58" fill="none">
      <Rect x="1" y="1" width="56" height="56" rx="28" fill="#3B4E3C" />
      <Path
        d="M22.25 29C24.3125 29 26 27.3594 26 25.25C26 23.1875 24.3125 21.5 22.25 21.5C20.1406 21.5 18.5 23.1875 18.5 25.25C18.5 27.3594 20.1406 29 22.25 29ZM38.75 23H28.25C27.8281 23 27.5 23.375 27.5 23.75V30.5H17V20.75C17 20.375 16.625 20 16.25 20H14.75C14.3281 20 14 20.375 14 20.75V37.25C14 37.6719 14.3281 38 14.75 38H16.25C16.625 38 17 37.6719 17 37.25V35H41V37.25C41 37.6719 41.3281 38 41.75 38H43.25C43.625 38 44 37.6719 44 37.25V28.25C44 25.3906 41.6094 23 38.75 23Z"
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
