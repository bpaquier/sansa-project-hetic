import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EnvelopeProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Envelope({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: EnvelopeProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M19.4814 6.5H6.48145C5.65301 6.5 4.98145 7.17156 4.98145 8V17C4.98145 17.8284 5.65301 18.5 6.48145 18.5H19.4814C20.3099 18.5 20.9814 17.8284 20.9814 17V8C20.9814 7.17156 20.3099 6.5 19.4814 6.5ZM19.4814 8V9.27516C18.7808 9.84575 17.6637 10.733 15.2756 12.603C14.7493 13.0169 13.7068 14.0115 12.9814 13.9999C12.2562 14.0116 11.2134 13.0168 10.6873 12.603C8.29957 10.7333 7.18223 9.84584 6.48145 9.27516V8H19.4814ZM6.48145 17V11.1999C7.19751 11.7703 8.21298 12.5706 9.76076 13.7826C10.4438 14.3203 11.6399 15.5072 12.9814 15.5C14.3164 15.5072 15.4974 14.3375 16.2019 13.7829C17.7496 12.5709 18.7654 11.7703 19.4814 11.2V17H6.48145Z" />
    </Svg>
  );
}
