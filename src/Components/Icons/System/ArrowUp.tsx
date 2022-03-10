import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ArrowUpProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ArrowUp({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: ArrowUpProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="m12.53 8.079 6.074 6.073a.75.75 0 0 1 0 1.06l-.709.709a.75.75 0 0 1-1.06.001L12 11.11l-4.836 4.813a.75.75 0 0 1-1.06-.001l-.708-.708a.75.75 0 0 1 0-1.061L11.47 8.08a.75.75 0 0 1 1.06 0Z"/>
    </Svg>
  );
}
