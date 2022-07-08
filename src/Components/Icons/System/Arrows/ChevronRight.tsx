import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ArrowUpProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ChevrontRight({
  color = theme?.color?.neutral?.black40,
  width = theme.sizes.icon.system,
  height = theme.sizes.icon.system
}: ArrowUpProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M5.15625 1.81641L4.60938 2.33594C4.5 2.47266 4.5 2.69141 4.60938 2.80078L9.55859 7.75L4.60938 12.7266C4.5 12.8359 4.5 13.0547 4.60938 13.1914L5.15625 13.7109C5.29297 13.8477 5.48438 13.8477 5.62109 13.7109L11.3633 7.99609C11.4727 7.85938 11.4727 7.66797 11.3633 7.53125L5.62109 1.81641C5.48438 1.67969 5.29297 1.67969 5.15625 1.81641Z"
        fill={color}
      />
    </Svg>
  );
}
