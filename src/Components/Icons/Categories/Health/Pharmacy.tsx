import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface PharmacyProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Pharmacy({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: PharmacyProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M12.965 9.816h-1.986a.223.223 0 0 1-.223-.223v-2.75c0-.123.1-.223.223-.223h1.986c.123 0 .223.1.223.224v2.749c0 .123-.1.223-.223.223zm-1.763-.447h1.54V7.067h-1.54v2.302zm.432 1.309h-.655a.223.223 0 0 1 0-.446h.655a.223.223 0 0 1 0 .447zm2.544-5.998v-.003a.216.216 0 0 0-.011-.037l-.001-.002-1.005-2.605a.224.224 0 0 0-.208-.143H3.047a.223.223 0 0 0-.208.143l-.995 2.56a.223.223 0 0 0-.025.103v9.333c0 .124.1.224.223.224h11.916c.123 0 .223-.1.223-.223V4.717a.217.217 0 0 0-.003-.038zm-4.415 7.187H2.265V6.075h7.498v5.792zm-7.498.446h7.498v1.493H2.265v-1.492zm10.477 1.493h-1.54v-2.294h1.54v2.294zm.993 0h-.547v-2.518c0-.123-.1-.223-.223-.223h-1.986c-.123 0-.223.1-.223.223v2.518h-.547V6.075h3.526v7.731zm0-8.178H2.265v-.71h3.118a.223.223 0 0 0 0-.446H2.37l.83-2.135h9.6l.832 2.158h-3.015a.223.223 0 0 0 0 .446h3.118v.687z"
        fill={primaryColor}
      />
      <Path
        d="M9.044 3.76h-.82v-.822a.223.223 0 0 0-.447 0v.82h-.82a.223.223 0 0 0 0 .447h.82v.821a.223.223 0 0 0 .447 0v-.82h.82a.223.223 0 0 0 0-.447Z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
