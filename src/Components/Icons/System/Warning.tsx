import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface WarningProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Warning({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: WarningProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M21.2789 18.2504C21.8557 19.2502 21.1317 20.5 19.9796 20.5H4.98314C3.82886 20.5 3.10817 19.2483 3.68386 18.2504L11.1822 5.24953C11.7593 4.24925 13.2047 4.25106 13.7807 5.24953L21.2789 18.2504ZM12.4815 15.5625C11.6876 15.5625 11.044 16.2061 11.044 17C11.044 17.7939 11.6876 18.4375 12.4815 18.4375C13.2754 18.4375 13.919 17.7939 13.919 17C13.919 16.2061 13.2754 15.5625 12.4815 15.5625ZM11.1167 10.3954L11.3485 14.6454C11.3593 14.8443 11.5238 15 11.7229 15H13.24C13.4392 15 13.6036 14.8443 13.6144 14.6454L13.8462 10.3954C13.858 10.1806 13.6869 10 13.4718 10H11.4911C11.276 10 11.105 10.1806 11.1167 10.3954Z"/>
    </Svg>
  );
}
