import React from "react";

import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";
export interface ChildCare1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function SearchBig({
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: ChildCare1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64" fill="none">
      <Path
        d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z"
        fill="#55789B"
      />
      <Path
        d="M23.2344 43.6719L27.9219 38.9844C28.1094 38.75 28.25 38.4688 28.25 38.1875L28.25 37.4375C29.8906 38.7031 31.9531 39.5 34.25 39.5C39.5938 39.5 44 35.0938 44 29.75C44 24.3594 39.5938 20 34.25 20C28.8594 20 24.5 24.3594 24.5 29.75C24.5 32 25.25 34.0625 26.5625 35.75L25.7656 35.75C25.4844 35.75 25.2031 35.8438 24.9688 36.0781L20.3281 40.7188C19.8594 41.1875 19.8594 41.8906 20.3281 42.3125L21.6406 43.625C22.0625 44.0938 22.7656 44.0938 23.2344 43.6719ZM28.25 29.75C28.25 26.4219 30.9219 23.75 34.25 23.75C37.5313 23.75 40.25 26.4219 40.25 29.75C40.25 33.0313 37.5313 35.75 34.25 35.75C30.9219 35.75 28.25 33.0313 28.25 29.75Z"
        fill="white"
      />
    </Svg>
  );
}
