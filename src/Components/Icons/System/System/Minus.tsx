import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface MinusProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Minus({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: MinusProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M18 11H6C5.44781 11 5 11.4478 5 12V13C5 13.5522 5.44781 14 6 14H18C18.5522 14 19 13.5522 19 13V12C19 11.4478 18.5522 11 18 11Z" />
    </Svg>
  );
}
