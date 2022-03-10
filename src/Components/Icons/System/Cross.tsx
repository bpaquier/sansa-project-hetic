import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CrossProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Cross({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: CrossProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M14.085 12.5L17.2122 9.37281C17.5959 8.98906 17.5959 8.36687 17.2122 7.98281L16.5172 7.28781C16.1334 6.90406 15.5113 6.90406 15.1272 7.28781L12 10.415L8.87281 7.28781C8.48906 6.90406 7.86688 6.90406 7.48281 7.28781L6.78781 7.98281C6.40406 8.36656 6.40406 8.98875 6.78781 9.37281L9.915 12.5L6.78781 15.6272C6.40406 16.0109 6.40406 16.6331 6.78781 17.0172L7.48281 17.7122C7.86656 18.0959 8.48906 18.0959 8.87281 17.7122L12 14.585L15.1272 17.7122C15.5109 18.0959 16.1334 18.0959 16.5172 17.7122L17.2122 17.0172C17.5959 16.6334 17.5959 16.0113 17.2122 15.6272L14.085 12.5Z" />
    </Svg>
  );
}
