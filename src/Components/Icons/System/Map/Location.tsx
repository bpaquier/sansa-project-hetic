import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LocationProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Location({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: LocationProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M18.8725 4.60996L5.87937 10.6068C4.38031 11.3065 4.87999 13.5053 6.47905 13.5053H11.9762V19.0025C11.9762 20.6015 14.175 21.1015 14.8747 19.6022L20.8715 6.60902C21.3712 5.40933 20.0718 4.10996 18.8725 4.60996Z" />
    </Svg>
  );
}
