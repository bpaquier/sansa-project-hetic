import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface MobileChargingProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function MobileCharging({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: MobileChargingProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={primaryColor}
        d="M10.233 15.037H5.767a.787.787 0 0 1-.787-.787V4.122a.79.79 0 0 1 .787-.786h.587v-.347a.79.79 0 0 1 .787-.787h1.717a.79.79 0 0 1 .787.787v.347h.588c.434 0 .786.353.786.786v10.13a.787.787 0 0 1-.786.786zM5.767 3.804a.318.318 0 0 0-.318.317v10.13c0 .175.142.317.318.317h4.466a.318.318 0 0 0 .318-.317V4.12a.318.318 0 0 0-.318-.317H5.767zm1.056-.47h2.353v-.346a.318.318 0 0 0-.318-.318H7.141a.318.318 0 0 0-.318.318v.347z"
      />
      <Path
        fill={secondaryColor}
        d="M7.522 12.126a.234.234 0 0 1-.233-.262l.2-1.7H6.43a.234.234 0 0 1-.207-.344l1.805-3.452a.235.235 0 0 1 .44.131l-.217 2.242h1.305a.235.235 0 0 1 .192.369l-2.035 2.916a.234.234 0 0 1-.192.1ZM6.82 9.695h.933a.235.235 0 0 1 .233.261l-.121 1.037L9.108 9.21H7.994a.235.235 0 0 1-.233-.257l.126-1.302L6.82 9.695Z"
      />
    </Svg>
  );
}
