import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface MapMarkerProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function MapMarker({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: MapMarkerProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 36 36" fill={color}>
      <Path d="M17.075 29.5158C10.2642 19.6421 9 18.6288 9 15C9 10.0294 13.0294 6 17.9999 6C22.9706 6 26.9999 10.0294 26.9999 15C26.9999 18.6288 25.7357 19.6421 18.925 29.5158C18.478 30.1614 17.522 30.1614 17.075 29.5158ZM17.9999 18.75C20.0711 18.75 21.7499 17.071 21.7499 15C21.7499 12.9289 20.0711 11.25 17.9999 11.25C15.9289 11.25 14.2499 12.9289 14.2499 15C14.2499 17.071 15.9289 18.75 17.9999 18.75Z" />
    </Svg>
  );
}
