import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ArrowRightProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ArrowRight({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: ArrowRightProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="m10.953 6.09.694-.693a.747.747 0 0 1 1.06 0l6.074 6.072a.747.747 0 0 1 0 1.06l-6.075 6.074a.747.747 0 0 1-1.06 0l-.693-.694a.75.75 0 0 1 .013-1.072l3.765-3.587H5.75A.748.748 0 0 1 5 12.5v-1c0-.416.334-.75.75-.75h8.981l-3.765-3.588a.745.745 0 0 1-.013-1.071Z" />
    </Svg>
  );
}
