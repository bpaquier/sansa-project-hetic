import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ArrowLeftProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function ArrowLeft({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: ArrowLeftProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="m12.695 17.673-.666.666a.717.717 0 0 1-1.017 0L5.18 12.51a.717.717 0 0 1 0-1.017l5.832-5.832a.717.717 0 0 1 1.017 0l.666.666a.72.72 0 0 1-.012 1.029L9.068 10.8h8.622c.4 0 .72.321.72.72v.96c0 .399-.32.72-.72.72H9.068l3.615 3.444c.294.279.3.744.012 1.029Z"/>
    </Svg>
  );
}
