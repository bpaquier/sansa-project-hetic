import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EatProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Eat({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: EatProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M11.989 5.247a.217.217 0 0 1-.175-.085 4.819 4.819 0 0 0-1.228-1.113 4.808 4.808 0 0 0-2.567-.74A4.768 4.768 0 0 0 4.87 4.485a.224.224 0 1 1-.294-.339c.145-.126.298-.242.454-.353a5.202 5.202 0 0 1 2.988-.93 5.23 5.23 0 0 1 3.583 1.41 5.33 5.33 0 0 1 .566.617.224.224 0 0 1-.038.313.254.254 0 0 1-.141.044zm-3.97 8.131a5.213 5.213 0 0 1-3.085-1.001 5.18 5.18 0 0 1-1.284-1.332.224.224 0 0 1 .06-.31.225.225 0 0 1 .309.06 4.88 4.88 0 0 0 1.176 1.22 4.77 4.77 0 0 0 2.824.916 4.795 4.795 0 0 0 4.033-2.188c.164-.25.302-.513.417-.789a.225.225 0 0 1 .29-.122.225.225 0 0 1 .123.29 5.029 5.029 0 0 1-.454.863 5.366 5.366 0 0 1-.852 1.005 5.236 5.236 0 0 1-3.557 1.388zm0-2.066A3.197 3.197 0 0 1 4.826 8.12 3.197 3.197 0 0 1 8.02 4.927a3.197 3.197 0 0 1 3.19 3.193 3.197 3.197 0 0 1-3.192 3.192zm0-5.942a2.749 2.749 0 0 0-2.746 2.746 2.749 2.749 0 0 0 2.746 2.746 2.749 2.749 0 0 0 2.746-2.746A2.751 2.751 0 0 0 8.019 5.37z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M13.463 14.17a.705.705 0 0 1-.704-.703V10.04c0-.123.1-.223.223-.223h.96c.123 0 .224.1.224.223v3.427a.705.705 0 0 1-.704.703Zm-.257-3.907v3.204a.257.257 0 0 0 .513 0v-3.204h-.513Z" />
        <Path d="M13.942 10.263h-1.916a.224.224 0 0 1-.223-.223V4.112c0-1.18.96-2.14 2.14-2.14.122 0 .223.101.223.224v7.844c0 .123-.1.223-.224.223Zm-1.697-.446h1.47V2.434c-.83.108-1.47.823-1.47 1.678v5.705ZM3.353 14.17a.705.705 0 0 1-.704-.703V6.103c0-.123.1-.223.224-.223h.96c.122 0 .223.1.223.223v7.364a.703.703 0 0 1-.703.703ZM3.1 6.326v7.14a.257.257 0 0 0 .513 0v-7.14H3.1Z" />
        <Path d="M4.037 6.326H2.672a.838.838 0 0 1-.838-.837V2.196a.224.224 0 0 1 .447 0V5.49a.39.39 0 0 0 .39.39h1.363a.39.39 0 0 0 .39-.39V2.196a.224.224 0 0 1 .447 0V5.49a.835.835 0 0 1-.834.837zm-.684-1.328a.224.224 0 0 1-.224-.223V2.196a.224.224 0 0 1 .447 0v2.579a.222.222 0 0 1-.223.223z" />
        <Path d="M4.644 5.017H2.065a.224.224 0 0 1-.223-.224c0-.122.1-.223.223-.223h2.579a.224.224 0 0 1 0 .447Z" />
      </G>
    </Svg>
  );
}
