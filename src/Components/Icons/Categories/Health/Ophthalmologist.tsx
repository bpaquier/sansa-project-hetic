import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface OphthalmologistProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Ophthalmologist({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: OphthalmologistProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M8 10.516a2.447 2.447 0 0 1-2.445-2.444A2.447 2.447 0 0 1 8 5.627a2.447 2.447 0 0 1 2.444 2.445A2.447 2.447 0 0 1 8 10.516zm0-4.44a2 2 0 0 0-1.996 1.996A2 2 0 0 0 8 10.067a2 2 0 0 0 1.995-1.995A2 2 0 0 0 8 6.076z"
        fill={secondaryColor}
      />
      <Path
        d="M8 11.357a7.612 7.612 0 0 1-3.514-.86 7.649 7.649 0 0 1-2.645-2.294.225.225 0 0 1 0-.262 7.656 7.656 0 0 1 2.645-2.293 7.61 7.61 0 0 1 7.027 0A7.66 7.66 0 0 1 14.16 7.94a.224.224 0 0 1 0 .262 7.648 7.648 0 0 1-2.645 2.293 7.61 7.61 0 0 1-3.513.86ZM2.304 8.072A7.163 7.163 0 0 0 8 10.907a7.162 7.162 0 0 0 5.696-2.835A7.165 7.165 0 0 0 8 5.236a7.167 7.167 0 0 0-5.698 2.836Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
