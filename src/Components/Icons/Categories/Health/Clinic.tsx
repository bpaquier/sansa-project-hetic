import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ClinicProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Clinic({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: ClinicProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M6.446 13.251c-.666 0-1.315-.13-1.93-.385l-.006-.003a2.568 2.568 0 0 0-.692-.18l-.859-.099a.69.69 0 0 1-.612-.686v-.867a2.816 2.816 0 0 1 2.814-2.813h2.59a2.83 2.83 0 0 1 1.305.32.223.223 0 0 1-.208.396 2.34 2.34 0 0 0-1.097-.269h-2.59a2.37 2.37 0 0 0-2.367 2.367v.866c0 .124.093.229.217.243l.86.1a3.03 3.03 0 0 1 .81.21l.006.002a4.56 4.56 0 0 0 2.88.212.223.223 0 1 1 .11.434 5.06 5.06 0 0 1-1.23.152zm.009-5.461a2.076 2.076 0 0 1-2.082-2.012l-.06-1.74c-.02-.57.187-1.11.583-1.52s.928-.636 1.498-.636h.121a2.07 2.07 0 0 1 1.499.636c.396.41.603.95.583 1.52l-.06 1.74a2.074 2.074 0 0 1-2.082 2.011zm-.06-5.462a1.62 1.62 0 0 0-1.178.5 1.624 1.624 0 0 0-.458 1.194l.06 1.74a1.63 1.63 0 0 0 1.637 1.58 1.63 1.63 0 0 0 1.636-1.58l.06-1.74a1.624 1.624 0 0 0-.458-1.194 1.62 1.62 0 0 0-1.177-.5h-.122z"
        fill={secondaryColor}
      />
      <Path
        d="M13.43 9.626h-1.108V8.045c0-.123-.1-.224-.223-.224H8.952c-.123 0-.223.1-.223.224v1.581H7.62c-.123 0-.223.1-.223.223v4.189c0 .123.1.223.223.223h5.808c.124 0 .224-.1.224-.223V9.849c0-.123-.1-.223-.223-.223Zm-4.255.128V8.268h2.7v5.546h-.472v-1.87c0-.124-.1-.224-.223-.224H9.87c-.123 0-.223.1-.223.223v1.872h-.472v-4.06Zm-1.33.319h.883v3.742h-.884v-3.742Zm2.249 3.742v-1.648h.863v1.648h-.863Zm3.112 0h-.884v-3.742h.884v3.742Z"
        fill={primaryColor}
      />
      <Path
        d="M10.053 9.6h.249v.25a.223.223 0 0 0 .446 0V9.6h.25a.223.223 0 0 0 0-.446h-.25v-.249a.223.223 0 0 0-.446 0v.249h-.25a.223.223 0 0 0 0 .446Zm1.117 1.118H9.878a.223.223 0 0 0 0 .447h1.29a.223.223 0 0 0 0-.447Z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
