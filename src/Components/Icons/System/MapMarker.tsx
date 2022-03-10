import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface MapMarkerProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function MapMarker({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: MapMarkerProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M12.3648 20.1772C7.82426 13.5947 6.98145 12.9192 6.98145 10.5C6.98145 7.18628 9.66773 4.5 12.9814 4.5C16.2952 4.5 18.9814 7.18628 18.9814 10.5C18.9814 12.9192 18.1386 13.5947 13.5981 20.1772C13.3001 20.6076 12.6628 20.6076 12.3648 20.1772ZM12.9814 13C14.3622 13 15.4814 11.8807 15.4814 10.5C15.4814 9.11928 14.3622 8 12.9814 8C11.6007 8 10.4814 9.11928 10.4814 10.5C10.4814 11.8807 11.6007 13 12.9814 13Z" />
    </Svg>
  );
}
