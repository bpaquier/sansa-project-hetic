import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface HospitalProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Hospital({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: HospitalProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M11.16 14.255a.234.234 0 0 1 0-.468l2.51-.005V5.78l-2.509.004a.235.235 0 0 1 0-.468l2.742-.006a.234.234 0 0 1 .235.235v8.471c0 .13-.104.234-.234.235l-2.743.005Z"
        fill={primaryColor}
      />
      <Path
        d="M12.072 7.066a.235.235 0 0 1-.001-.469l.917-.005h.002a.234.234 0 0 1 .001.469l-.917.005h-.002Zm0 .992a.235.235 0 0 1-.001-.469l.917-.005h.002a.234.234 0 0 1 .001.469l-.917.005h-.002Zm0 .992a.235.235 0 0 1-.001-.468l.917-.006h.002a.234.234 0 0 1 .001.47l-.917.004h-.002Zm0 .993a.235.235 0 0 1-.001-.469l.917-.005h.002a.234.234 0 0 1 .001.469l-.917.005h-.002Zm0 .992a.235.235 0 0 1-.001-.469l.917-.005h.002a.234.234 0 0 1 .001.47l-.917.004h-.002Zm0 .993a.235.235 0 0 1-.001-.469l.917-.005h.002a.234.234 0 0 1 .001.468l-.917.006h-.002Zm0 .992a.235.235 0 0 1-.001-.468l.917-.006h.002a.234.234 0 0 1 .001.469l-.917.005h-.002Z"
        fill={secondaryColor}
      />
      <Path
        d="m4.839 14.255-2.743-.005a.235.235 0 0 1-.234-.234V5.544a.235.235 0 0 1 .234-.234l2.743.005a.235.235 0 0 1 0 .469L2.33 5.779v8.002l2.509.005a.235.235 0 0 1-.001.47Z"
        fill={primaryColor}
      />
      <Path
        d="M3.928 7.066h-.001l-.918-.005a.234.234 0 0 1 .002-.47h.001l.917.006a.234.234 0 0 1-.001.469Zm0 .992h-.001l-.918-.005a.234.234 0 0 1 .002-.469h.001l.917.005a.234.234 0 0 1-.001.469Zm0 .992h-.001l-.918-.005a.234.234 0 0 1 .002-.469h.001l.917.006a.234.234 0 0 1-.001.468Zm0 .993h-.001l-.918-.005a.234.234 0 1 1 .003-.47l.917.006a.234.234 0 0 1-.001.469Zm0 .992h-.001l-.918-.005a.234.234 0 1 1 .003-.469l.917.005a.234.234 0 0 1-.001.47Zm0 .993h-.001l-.918-.006a.234.234 0 0 1 .002-.469h.001l.917.006a.235.235 0 0 1-.001.469Zm0 .992h-.001l-.918-.005a.234.234 0 0 1 .002-.47h.001l.917.007a.234.234 0 0 1-.001.468Z"
        fill={secondaryColor}
      />
      <G fill={primaryColor}>
        <Path d="M9.29 14.249H6.714a.234.234 0 0 1-.234-.235v-3.05c0-.129.105-.234.234-.234h2.578c.13 0 .234.105.234.235v3.05a.234.234 0 0 1-.234.234Zm-2.342-.47h2.108V11.2H6.948v2.58Z" />
        <Path d="M11.136 14.249H4.868a.234.234 0 0 1-.234-.235V2.122c0-.13.105-.234.234-.234h6.268c.13 0 .235.105.235.234v11.892c0 .13-.105.235-.235.235Zm-6.033-.47h5.799V2.358h-5.8V13.78Z" />
        <Path d="M8.002 14.249a.234.234 0 0 1-.234-.235v-2.978a.234.234 0 1 1 .468 0v2.978c0 .13-.105.235-.234.235Z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="M10.213 7.044H5.761a.234.234 0 1 1 0-.469h4.452a.234.234 0 1 1 0 .47Zm0 .995H5.761a.234.234 0 1 1 0-.469h4.452a.234.234 0 1 1 0 .469Zm0 .994H5.761a.234.234 0 1 1 0-.469h4.452a.234.234 0 1 1 0 .469Zm0 .995H5.761a.234.234 0 0 1 0-.47h4.452a.234.234 0 1 1 0 .47Zm-2.211-4.2a.234.234 0 0 1-.234-.234V3.442a.234.234 0 1 1 .468 0v2.152c0 .13-.105.234-.234.234Z" />
        <Path d="M9.078 4.752H6.926a.234.234 0 1 1 0-.469h2.152a.234.234 0 1 1 0 .469Z" />
      </G>
    </Svg>
  );
}
