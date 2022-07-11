import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EducationProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Education({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: EducationProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M11.529 13.84H3.116a.224.224 0 0 1-.223-.224V2.527c0-.122.1-.223.223-.223h8.413c.123 0 .223.1.223.223v3.617c0 .123-.1.223-.223.223a.224.224 0 0 1-.223-.223V2.751H3.339v10.642h7.967V7.722a.223.223 0 0 1 .446 0v5.894c0 .126-.1.223-.223.223Z"
        fill={primaryColor}
      />
      <G fill={secondaryColor}>
        <Path d="M7.559 11.16a.232.232 0 0 1-.157-.063.217.217 0 0 1-.067-.175l.045-.87a.236.236 0 0 1 .078-.16l5.24-5.24a.227.227 0 0 1 .316 0l.788.789a.214.214 0 0 1 0 .313l-5.25 5.26a.216.216 0 0 1-.138.064l-.837.082H7.56Zm.264-.994-.03.525.499-.048 5.038-5.038-.476-.473-5.031 5.034Z" />
        <Path d="m13.4 5.672-.636-.637.42-.42a.211.211 0 0 1 .298 0l.339.338a.211.211 0 0 1 0 .298l-.42.42Z" />
      </G>
    </Svg>
  );
}
