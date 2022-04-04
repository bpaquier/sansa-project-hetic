import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface SocialProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Social({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: SocialProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M13.966 9.575h-1.48a.224.224 0 0 1-.224-.223c0-.123.1-.224.223-.224h1.258v-2.75a2.808 2.808 0 0 0-2.806-2.805H7.48c-.74 0-1.44.29-1.964.815A2.758 2.758 0 0 0 4.7 6.353c0 .256.033.513.104.759a.225.225 0 0 1-.152.275.225.225 0 0 1-.276-.153 3.194 3.194 0 0 1-.123-.881A3.2 3.2 0 0 1 5.2 4.072a3.2 3.2 0 0 1 2.28-.946h3.457A3.255 3.255 0 0 1 14.19 6.38v2.973c0 .122-.1.223-.223.223Z"
        fill={primaryColor}
      />
      <Path
        d="M9.516 13.017H3.034a.224.224 0 0 1-.223-.223V9.82a3.255 3.255 0 0 1 3.252-3.252h3.456a3.226 3.226 0 0 1 3.223 3.223 3.232 3.232 0 0 1-3.226 3.226Zm-6.259-.447h6.259a2.778 2.778 0 0 0 2.775-2.776A2.778 2.778 0 0 0 9.516 7.02H6.059a2.808 2.808 0 0 0-2.806 2.805v2.746h.004Z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
