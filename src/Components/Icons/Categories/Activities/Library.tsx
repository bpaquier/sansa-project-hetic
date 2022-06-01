import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LibraryProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Library({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: LibraryProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M7.294 14.937a.234.234 0 0 1-.166-.069l-.783-.783-.765.765a.234.234 0 0 1-.4-.168l.015-1.805a.234.234 0 0 1 .235-.232h.002c.13 0 .233.107.232.236l-.01 1.232.525-.526a.234.234 0 0 1 .332 0l.563.563.034-1.287a.234.234 0 1 1 .468.012l-.048 1.833a.235.235 0 0 1-.234.23Z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M12.604 3.797a.234.234 0 0 1-.234-.235V1.726l-6.666-.051c-.35-.006-.622.09-.806.282a.981.981 0 0 0-.26.665.234.234 0 1 1-.468.025 1.452 1.452 0 0 1 .39-1.015c.279-.29.665-.434 1.151-.426l6.894.052c.13 0 .234.105.234.234v2.07c0 .13-.106.235-.235.235z" />
        <Path d="M7.818 12.993c-1.02 0-1.857 0-2.071-.003-1.22-.015-1.582-.943-1.603-1.431v-.01l.017-8.922v-.005a.234.234 0 0 1 .235-.23h.002a.235.235 0 0 1 .232.235v.01c.001.1.05.775 1.087.781h6.904a.234.234 0 0 1 .234.235v9.102c0 .13-.104.235-.234.235l-4.803.003zm-3.205-1.45c.002.03.024.267.166.498.192.313.52.475.973.48h6.634V3.889c-1.091 0-5.652.005-6.672-.001-.453-.003-.818-.11-1.086-.323l-.015 7.978z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="M11.505 2.763a.231.231 0 0 1-.095-.02l-5.22-.004a.234.234 0 1 1 .001-.47l5.314.005c.13 0 .234.105.234.234v.02c0 .13-.105.235-.234.235z" />
        <Path d="M11.505 2.743c-.035 0-3.54 0-5.497-.004a.234.234 0 0 1 0-.47l5.497.005a.234.234 0 1 1 0 .469z" />
      </G>
    </Svg>
  );
}
