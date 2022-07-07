import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FreeWifiProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function FreeWifi({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: FreeWifiProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={primaryColor}
        d="M15.014 6.411a.225.225 0 0 1-.165-.073c-3.597-3.868-9.45-3.868-13.047 0a.223.223 0 0 1-.331 0 .265.265 0 0 1 0-.356C3.3 4.013 5.736 2.929 8.325 2.929s5.024 1.084 6.855 3.053a.265.265 0 0 1 0 .356.225.225 0 0 1-.166.073zm-1.476 1.444a.225.225 0 0 1-.166-.074c-2.783-2.992-7.312-2.992-10.095 0a.223.223 0 0 1-.33 0 .265.265 0 0 1 0-.356C4.382 5.881 6.292 5.03 8.324 5.03s3.942.85 5.378 2.395a.265.265 0 0 1 0 .356.225.225 0 0 1-.165.074zM12.1 9.257a.225.225 0 0 1-.165-.073c-1.99-2.14-5.228-2.14-7.219 0a.223.223 0 0 1-.33 0 .265.265 0 0 1 0-.356c2.172-2.336 5.707-2.336 7.88 0a.265.265 0 0 1 0 .356.224.224 0 0 1-.166.073z"
      />
      <Path
        fill={secondaryColor}
        d="M8.325 12.93c-.902 0-1.637-.79-1.637-1.76s.735-1.76 1.637-1.76 1.637.79 1.637 1.76-.734 1.76-1.637 1.76zm0-3.016c-.644 0-1.168.563-1.168 1.256s.524 1.256 1.168 1.256 1.169-.564 1.169-1.256-.524-1.256-1.169-1.256z"
      />
    </Svg>
  );
}
