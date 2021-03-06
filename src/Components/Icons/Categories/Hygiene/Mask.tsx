import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface MaskProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Mask({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: MaskProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={secondaryColor}
        d="M4.857 9.622c-1.695 0-2.81-1.178-3.287-2.28-.423-.974-.389-1.967.083-2.472a.81.81 0 0 1 .615-.27h.006c.91 0 2.026 1.154 2.037 1.166a.223.223 0 0 0 .323-.309c-.051-.053-1.26-1.303-2.36-1.303h-.008a1.25 1.25 0 0 0-.939.411C.726 5.208.66 6.368 1.16 7.52c.534 1.232 1.787 2.548 3.697 2.548a.223.223 0 0 0 0-.446Zm9.816-5.057c-.254-.27-.57-.41-.939-.411h-.008c-1.1 0-2.309 1.25-2.36 1.303a.223.223 0 0 0 .323.309C11.7 5.754 12.816 4.6 13.726 4.6h.006a.81.81 0 0 1 .615.27c.472.505.506 1.498.083 2.472-.478 1.102-1.592 2.28-3.287 2.28a.223.223 0 0 0 0 .446c1.91 0 3.163-1.316 3.697-2.548.5-1.152.434-2.312-.167-2.955Z"
      />
      <Path
        fill={primaryColor}
        d="M11.744 8.242v-2.63a.223.223 0 0 0-.168-.217l-3.13-.793a1.836 1.836 0 0 0-.9 0l-3.129.793a.223.223 0 0 0-.168.217v2.63c0 .34.046.668.13.98l.006.02a3.754 3.754 0 0 0 3.612 2.748 3.754 3.754 0 0 0 3.612-2.75l.004-.015c.085-.314.13-.643.13-.983Zm-7.048 0v-.46l2.96-.752c.223-.056.458-.056.68 0l2.961.751v.46c0 .264-.031.52-.09.766-.759.295-3.561 1.216-6.42.005a3.303 3.303 0 0 1-.091-.77Zm2.96-3.208c.223-.056.458-.056.68 0l2.961.751v1.536l-2.85-.723a1.836 1.836 0 0 0-.901 0l-2.85.723V5.785l2.96-.75Zm.34 6.509a3.306 3.306 0 0 1-3.023-1.978c1.009.37 2 .5 2.897.5 1.37 0 2.516-.303 3.158-.519a3.306 3.306 0 0 1-3.032 1.997Z"
      />
    </Svg>
  );
}
