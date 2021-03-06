import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FileProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function File({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: FileProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 17" fill="none">
      <Path
        d="M11.5312 3.95724L8.9375 1.33224C8.65625 1.05099 8.25 0.894745 7.875 0.894745H1.5C0.656249 0.894745 -1.43051e-06 1.58224 -1.43051e-06 2.39474V15.3947C-1.43051e-06 16.2385 0.656249 16.8947 1.5 16.8947H10.5C11.3125 16.8947 12 16.2385 12 15.3947V5.01974C12 4.64474 11.8125 4.23849 11.5312 3.95724ZM10.375 4.89474H8V2.51974L10.375 4.89474ZM1.5 15.3947V2.39474H6.5V5.64474C6.5 6.08224 6.8125 6.39474 7.25 6.39474H10.5V15.3947H1.5Z"
        fill={color}
      />
    </Svg>
  );
}
