import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EllipsisProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Ellipsis({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: EllipsisProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 10.25C13.2438 10.25 14.25 11.2562 14.25 12.5C14.25 13.7437 13.2438 14.75 12 14.75C10.7563 14.75 9.75 13.7437 9.75 12.5C9.75 11.2562 10.7563 10.25 12 10.25ZM9.75 7C9.75 8.24375 10.7563 9.25 12 9.25C13.2438 9.25 14.25 8.24375 14.25 7C14.25 5.75625 13.2438 4.75 12 4.75C10.7563 4.75 9.75 5.75625 9.75 7ZM9.75 18C9.75 19.2437 10.7563 20.25 12 20.25C13.2438 20.25 14.25 19.2437 14.25 18C14.25 16.7563 13.2438 15.75 12 15.75C10.7563 15.75 9.75 16.7563 9.75 18Z" />
    </Svg>
  );
}
