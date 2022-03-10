import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ArrowDownProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ArrowDown({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: ArrowDownProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M11.47 15.921 5.396 9.848a.75.75 0 0 1 0-1.06l.709-.71a.75.75 0 0 1 1.06 0L12 12.89l4.836-4.813a.75.75 0 0 1 1.06 0l.707.71a.75.75 0 0 1 0 1.06L12.53 15.92a.75.75 0 0 1-1.06 0Z" />
    </Svg>
  );
}
