import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface UrbanTabletProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function UrbanTablet({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: UrbanTabletProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={primaryColor}
        d="M11.399 15.772H4.602a.73.73 0 0 1-.729-.73V2.197a.73.73 0 0 1 .729-.729h6.796a.73.73 0 0 1 .73.73v12.846a.73.73 0 0 1-.73.729ZM4.602 1.942a.254.254 0 0 0-.254.255v12.846c0 .14.114.254.254.254h6.796c.14 0 .254-.114.254-.254V2.196a.254.254 0 0 0-.254-.254H4.602Z"
      />
      <Path
        fill={secondaryColor}
        d="M9.808 14.958H6.192a.238.238 0 0 1 0-.475h3.616a.238.238 0 0 1 0 .475Z"
      />
      <Path
        fill={primaryColor}
        d="M5.757 1.705h.156c.213 0 .397.233.444.44v-.087c.034.144.162.333.31.333h2.666a.318.318 0 0 0 .31-.247v-.086a.455.455 0 0 1 .444-.353h.186"
      />
    </Svg>
  );
}
