import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface BusProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Bus({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: BusProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={primaryColor}
        d="M11.818 10.698H5.064a.224.224 0 0 1-.223-.223c0-.123.1-.223.223-.223h6.754a.224.224 0 0 1 0 .446Zm2.627 0h-.964a.224.224 0 0 1-.223-.223c0-.123.1-.223.223-.223h.964a.224.224 0 0 1 0 .446ZM12.22 5.046h-.562a.224.224 0 0 1-.223-.223c0-.123.1-.223.223-.223h.562a.223.223 0 0 1 0 .446Z"
      />
      <Path
        fill={secondaryColor}
        d="M1.931 9.895h-.376a.224.224 0 0 1-.223-.223c0-.123.1-.224.223-.224h.376a.223.223 0 0 1 0 .447zm6.806-1.072H2.44a.224.224 0 0 1-.223-.223c0-.123.1-.223.223-.223h6.296a.223.223 0 0 1 0 .446zm4.848.027a.222.222 0 0 1-.223-.217.221.221 0 0 1 .212-.23l.644-.026a.221.221 0 0 1 .23.212.22.22 0 0 1-.212.23l-.643.026z"
      />
      <G fill={primaryColor}>
        <Path d="M3.404 10.698H1.581a.224.224 0 0 1-.223-.223V4.823c0-.123.1-.223.223-.223h10.073c.108 0 .2.078.22.186l.453 2.787a.105.105 0 0 1 .004.037v2.248c0 .122-.1.223-.223.223a.224.224 0 0 1-.224-.223V7.625l-.42-2.582H1.808v5.205h1.6c.123 0 .223.1.223.224a.23.23 0 0 1-.227.226Z" />
        <Path d="M14.255 10.538a.224.224 0 0 1-.224-.223V8.518c0-.223-.06-.394-.178-.51-.19-.182-.473-.178-.476-.178H12.11a.224.224 0 0 1-.223-.224c0-.122.1-.223.223-.223h1.258c.056 0 .484.004.796.305.209.201.313.48.313.83v1.793c0 .127-.1.227-.223.227Z" />
      </G>
      <Path
        fill={secondaryColor}
        d="M4.234 11.543c-.58 0-1.053-.473-1.053-1.053s.473-1.053 1.053-1.053 1.053.473 1.053 1.053a1.05 1.05 0 0 1-1.053 1.053Zm0-1.66a.607.607 0 1 0 0 1.214.607.607 0 0 0 0-1.213Zm8.413 1.66c-.58 0-1.053-.473-1.053-1.053s.473-1.053 1.053-1.053S13.7 9.91 13.7 10.49s-.472 1.053-1.053 1.053Zm0-1.66a.607.607 0 1 0 0 1.214.607.607 0 0 0 0-1.213Z"
      />
      <G fill={primaryColor}>
        <Path d="M9.756 10.643a.224.224 0 0 1-.223-.224V4.85a.223.223 0 0 1 .447 0v5.574c0 .123-.1.22-.224.22Zm1.098 0a.224.224 0 0 1-.223-.224V4.901a.223.223 0 0 1 .446 0v5.518c0 .127-.1.224-.223.224Z" />
        <Path d="M9.567 7.844H1.745a.224.224 0 0 1-.223-.223c0-.123.1-.223.223-.223h7.822a.223.223 0 0 1 0 .446Z" />
        <Path d="M2.977 7.778a.224.224 0 0 1-.224-.224V4.868a.224.224 0 0 1 .447 0v2.686c0 .123-.1.224-.223.224Zm1.365 0a.224.224 0 0 1-.223-.224V4.868a.223.223 0 0 1 .447 0v2.686c0 .123-.1.224-.224.224Zm1.314 0a.224.224 0 0 1-.223-.224V4.868a.223.223 0 0 1 .446 0v2.686c0 .123-.1.224-.223.224Zm1.339 0a.224.224 0 0 1-.223-.224V4.868a.223.223 0 0 1 .446 0v2.686c0 .123-.1.224-.223.224Zm1.34 0a.224.224 0 0 1-.223-.224V4.868a.223.223 0 0 1 .446 0v2.686c0 .123-.1.224-.223.224Z" />
      </G>
    </Svg>
  );
}
