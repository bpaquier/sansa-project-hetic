import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FilterProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Filter({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: FilterProps): JSX.Element {
  return (
    <Svg {...{ width, height }} viewBox="0 0 16 16" fill={color}>
      <Path
        d="M15.2492 0H0.750871C0.0846841 0 -0.251472 0.808313 0.220559 1.28034L5.99999 7.06066V13.5C5.99999 13.7447 6.1194 13.9741 6.3199 14.1144L8.8199 15.8638C9.31311 16.2091 9.99999 15.8592 9.99999 15.2494V7.06066L15.7796 1.28034C16.2506 0.80925 15.9168 0 15.2492 0Z"
        fill={color}
      />
    </Svg>
  );
}
