import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ClothesProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Clothes({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: ClothesProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={secondaryColor}
        d="M11.171 11.924H4.83a.223.223 0 0 1 0-.446h6.342a.223.223 0 0 1 0 .446zm0-1.179H4.83a.223.223 0 0 1 0-.446h6.342a.223.223 0 0 1 0 .446zM8 5.007c-1.231 0-2.233-.907-2.233-2.022a.6.6 0 0 1 0-.036.224.224 0 0 1 .447.02v.016c0 .869.801 1.575 1.786 1.575s1.786-.706 1.786-1.575V2.97a.223.223 0 0 1 .446-.022l.001.037C10.233 4.1 9.231 5.007 8 5.007zm0 1.059c-1.822 0-3.32-1.285-3.411-2.925a.223.223 0 1 1 .445-.024C5.112 4.52 6.414 5.619 8 5.619s2.889-1.099 2.966-2.502a.223.223 0 0 1 .446.024C11.32 4.781 9.822 6.066 8 6.066z"
      />
      <G fill={primaryColor}>
        <Path d="M4.826 13.494H2.71a.223.223 0 0 1-.224-.224V5.956a3.162 3.162 0 0 1 2.787-3.148c.9-.105 1.814-.159 2.717-.159H8a.223.223 0 0 1 0 .447h-.01c-.885 0-1.782.052-2.664.155a2.716 2.716 0 0 0-2.392 2.705v7.09h1.669v-6.89a.223.223 0 0 1 .446 0v7.114c0 .124-.1.224-.223.224Z" />
        <Path d="M13.289 13.494h-2.115a.223.223 0 0 1-.224-.224V6.155a.223.223 0 0 1 .447 0v6.892h1.669v-7.09a2.715 2.715 0 0 0-2.393-2.706 23.142 23.142 0 0 0-2.664-.155h-.01a.223.223 0 1 1 0-.447h.01c.903 0 1.817.054 2.716.159a3.162 3.162 0 0 1 2.787 3.148v7.314c0 .124-.1.224-.223.224Z" />
      </G>
    </Svg>
  );
}
