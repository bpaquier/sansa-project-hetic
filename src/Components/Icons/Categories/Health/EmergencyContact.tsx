import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EmergencyContactProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function EmergencyContact({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: EmergencyContactProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M9.172 13.231a3.436 3.436 0 0 1-2.773-1.406l-2.814-3.85a3.264 3.264 0 0 1 .033-3.912c.339-.336 1.472-1.082 1.52-1.114a.224.224 0 0 1 .317.077l1.383 2.458a.223.223 0 0 1-.074.298l-1.07.685 2.688 3.675 1.176-.618a.223.223 0 0 1 .267.045l1.923 2.063a.224.224 0 0 1-.022.325c-.044.037-1.097.899-1.526 1.113a.205.205 0 0 1-.035.014 3.433 3.433 0 0 1-.993.147zM3.945 4.368a2.82 2.82 0 0 0 0 3.344l2.815 3.85a2.988 2.988 0 0 0 3.257 1.1c.274-.144.88-.611 1.24-.9L9.615 9.997l-1.195.629a.223.223 0 0 1-.284-.066L5.194 6.539a.222.222 0 0 1 .06-.32l1.091-.7-1.161-2.064-1.239.913z"
        fill={primaryColor}
      />
      <Path
        d="M11.328 7.788H9.919a.223.223 0 0 1-.223-.223V6.289H8.42a.223.223 0 0 1-.223-.224V4.657c0-.123.1-.223.223-.223h1.276V3.158c0-.124.1-.224.223-.224h1.409c.123 0 .223.1.223.224v1.275h1.276c.123 0 .223.1.223.224v1.408c0 .123-.1.223-.223.223h-1.276v1.276c0 .124-.1.224-.223.224Zm-1.185-.447h.962V6.065c0-.123.1-.223.223-.223h1.276V4.88h-1.276a.223.223 0 0 1-.223-.223V3.381h-.963v1.276c0 .123-.1.223-.223.223H8.643v.962H9.92c.123 0 .223.1.223.223v1.276Z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
