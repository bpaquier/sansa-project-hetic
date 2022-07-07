import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CheckProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Check({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: CheckProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M9.43431 18.2313L4.2343 13.0313C3.9219 12.7189 3.9219 12.2124 4.2343 11.9L5.36565 10.7686C5.67806 10.4562 6.18462 10.4562 6.49702 10.7686L9.99999 14.2715L17.503 6.76861C17.8154 6.4562 18.3219 6.4562 18.6343 6.76861L19.7657 7.89998C20.0781 8.21239 20.0781 8.71892 19.7657 9.03135L10.5657 18.2314C10.2532 18.5438 9.74671 18.5438 9.43431 18.2313Z" />
    </Svg>
  );
}
