import React from "react";

import Svg, { Path, Rect } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Activities({
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 58 58" fill="none">
      <Rect x="1" y="1" width="56" height="56" rx="28" fill="#D4494C" />
      <Path
        d="M27.2656 20.75C27.2188 19.4375 27.5 18.2656 28.1094 17.375C22.2969 17.6562 17.2344 22.2031 17 28.5312C17.8438 27.9219 19.0156 27.5938 20.3281 27.6406C24.0312 27.7344 27.3594 24.0781 27.2656 20.75ZM36.9688 28.1094C37.8594 28.1562 40.0156 27.9688 39.7344 25.5781C39.1719 23.7969 38.2344 22.1562 36.8281 20.7969C35.4688 19.3906 33.8281 18.4531 32.0469 17.8906C29.6562 17.6094 29.4688 19.7188 29.5156 20.6562C29.5625 22.8594 28.4844 25.4375 26.75 27.1719C25.0156 28.9062 22.4844 29.9844 20.2344 29.8906C19.3438 29.8906 17.1875 30.0781 17.4688 32.4688C18.0312 34.25 18.9688 35.8906 20.375 37.25C21.7344 38.6562 23.375 39.5938 25.1562 40.1562C27.5469 40.4375 27.7344 38.2812 27.7344 37.3906C27.6406 35.1875 28.7188 32.6094 30.4531 30.875C32.1875 29.1406 34.7656 28.0156 36.9688 28.1094ZM36.875 30.3594C33.5469 30.2656 29.8438 33.6875 29.9844 37.2969C29.9844 38.6094 29.7031 39.7812 29.0938 40.625C34.7656 40.3906 39.9688 35.9375 40.2031 29.5156C39.3594 30.125 38.1875 30.4062 36.875 30.3594Z"
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
