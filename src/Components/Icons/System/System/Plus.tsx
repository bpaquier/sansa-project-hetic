import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface PlusProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Plus({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: PlusProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M18 10H13.5V5.5C13.5 4.96875 13.0312 4.5 12.5 4.5H11.5C10.9375 4.5 10.5 4.96875 10.5 5.5V10H6C5.4375 10 5 10.4688 5 11V12C5 12.5625 5.4375 13 6 13H10.5V17.5C10.5 18.0625 10.9375 18.5 11.5 18.5H12.5C13.0312 18.5 13.5 18.0625 13.5 17.5V13H18C18.5312 13 19 12.5625 19 12V11C19 10.4688 18.5312 10 18 10Z" />
    </Svg>
  );
}
