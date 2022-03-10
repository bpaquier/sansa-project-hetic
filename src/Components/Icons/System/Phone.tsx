import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface PhoneProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Phone({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: PhoneProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M21.4001 5.26884L18.15 4.51884C17.7969 4.43759 17.4344 4.62197 17.2907 4.95322L15.7907 8.45322C15.6594 8.75947 15.7469 9.11884 16.0063 9.32822L17.9 10.8782C16.775 13.2751 14.8094 15.2688 12.3625 16.4157L10.8125 14.522C10.6 14.2626 10.2438 14.1751 9.93754 14.3063L6.43753 15.8063C6.10316 15.9532 5.91878 16.3157 6.00003 16.6688L6.75003 19.9188C6.82816 20.2563 7.12816 20.5001 7.48128 20.5001C15.4844 20.5001 21.9813 14.0157 21.9813 6.00009C21.9813 5.65009 21.7407 5.34697 21.4001 5.26884Z"/>
    </Svg>
  );
}
