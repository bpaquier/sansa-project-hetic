import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface AmbulanceProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Ambulance({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: AmbulanceProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M10.474 3.706c-.18 0-.327-.136-.327-.305s.147-.306.327-.306.328.137.328.306-.147.305-.328.305zm0-.468c-.076 0-.141.074-.141.163s.065.163.141.163.142-.074.142-.163-.065-.163-.142-.163z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M13.853 7.842H9.508a.234.234 0 0 1-.235-.234V5.13c0-.13.105-.234.235-.234h3.005a.234.234 0 1 1 0 .469h-2.77v2.008h4.11a.234.234 0 0 1 0 .469Z" />
        <Path d="M13.084 11.863a.235.235 0 0 1 0-.469l.646-.001V7.718l-1.9-3.303H2.27v6.977l.572-.002a.235.235 0 0 1 .001.47l-.807.002a.234.234 0 0 1-.235-.235V4.18c0-.13.105-.235.234-.235h9.931c.084 0 .162.045.204.118l1.998 3.475a.24.24 0 0 1 .031.117v3.972a.234.234 0 0 1-.234.234l-.88.002h-.001Z" />
        <Path d="M5.529 11.863a.234.234 0 1 1 0-.469l3.967-.002.881-.001a.235.235 0 0 1 .001.469l-.882.001-3.967.002Zm8.249-1.352h-.18a.76.76 0 0 1 0-1.517h.18a.234.234 0 1 1 0 .469h-.18a.29.29 0 0 0 0 .58h.18a.234.234 0 1 1 0 .468ZM2.929 9.97H2.06a.234.234 0 1 1 0-.469h.868a.234.234 0 1 1 0 .47Z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="M12.024 11.627a.304.304 0 1 1-.608 0 .304.304 0 0 1 .608 0zm-.304 1.42a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 1 1 0 2.84zm0-2.37a.952.952 0 1 0 .951.951.952.952 0 0 0-.95-.951zm-7.517 2.37a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 1 1 0 2.84zm0-2.37a.952.952 0 0 0-.951.95.952.952 0 1 0 .951-.951zm.304.95a.304.304 0 1 1-.608 0 .304.304 0 0 1 .608 0zm6.48-8.002h-.993a.234.234 0 1 1 0-.469h.993a.235.235 0 1 1 0 .47zM5.029 7.774a.234.234 0 0 1-.235-.235V5.134a.235.235 0 1 1 .47 0v2.405c0 .13-.106.235-.235.235z" />
        <Path d="M6.232 6.571H3.826a.234.234 0 1 1 0-.469h2.406a.234.234 0 1 1 0 .47Z" />
      </G>
    </Svg>
  );
}
