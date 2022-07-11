import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface JobProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Job({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: JobProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M7.59 12.816a5.541 5.541 0 0 1-3.955-1.646 5.65 5.65 0 0 1 0-7.952A5.541 5.541 0 0 1 7.59 1.572a5.54 5.54 0 0 1 3.954 1.646 5.65 5.65 0 0 1 0 7.952 5.541 5.541 0 0 1-3.954 1.646zm0-10.79A5.092 5.092 0 0 0 3.955 3.54a5.193 5.193 0 0 0 0 7.308A5.092 5.092 0 0 0 7.59 12.36a5.092 5.092 0 0 0 3.634-1.513 5.193 5.193 0 0 0 0-7.308A5.091 5.091 0 0 0 7.59 2.027z"
        fill={primaryColor}
      />
      <Path
        d="M3.563 5.777a.238.238 0 0 1-.218-.325 4.549 4.549 0 0 1 2.838-2.643c.124-.04.256.03.296.154a.238.238 0 0 1-.154.298 4.022 4.022 0 0 0-1.647 1.008c-.39.392-.692.85-.896 1.36a.236.236 0 0 1-.219.148Z"
        fill={secondaryColor}
      />
      <Path
        d="M14.728 14.571a.27.27 0 0 1-.19-.078l-3.255-3.217a.274.274 0 0 1-.004-.386.27.27 0 0 1 .384-.003l3.255 3.216a.274.274 0 0 1-.19.468Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
