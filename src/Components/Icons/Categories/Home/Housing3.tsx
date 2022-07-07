import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface Housing3Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Housing3({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: Housing3Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <G fill={primaryColor}>
        <Path d="M2.335 13.764H1.07a.223.223 0 0 1-.223-.223V5.784c0-.046.014-.091.04-.13a.987.987 0 0 1 .815-.42c.329 0 .626.153.815.42a.225.225 0 0 1 .041.13v4.534a.223.223 0 0 1-.446 0V5.862a.544.544 0 0 0-.41-.181.544.544 0 0 0-.409.181v7.455h.819v-1.358a.223.223 0 0 1 .446 0v1.581c0 .124-.1.224-.223.224Zm12.595 0h-1.266a.223.223 0 0 1-.223-.223v-1.582a.223.223 0 0 1 .446 0v1.358h.82V10.32a.223.223 0 0 1 .446 0v3.222c0 .123-.1.223-.223.223Z" />
        <Path d="M14.93 12.182H1.07a.223.223 0 0 1-.223-.223v-1.64c0-.124.1-.224.223-.224h13.86c.122 0 .223.1.223.223v1.64c0 .124-.1.224-.223.224Zm-13.637-.447h13.413v-1.194H1.293v1.194Z" />
      </G>
      <Path
        d="M14.93 10.535H6.49a.223.223 0 0 1-.223-.223V6.963c0-.123.1-.223.223-.223h5.349a3.318 3.318 0 0 1 3.314 3.314v.258c0 .123-.1.223-.223.223Zm-8.216-.446h7.992v-.035a2.87 2.87 0 0 0-2.867-2.868H6.714v2.903Z"
        fill={secondaryColor}
      />
      <Path
        d="M4.677 9.465h-.555a1.008 1.008 0 0 1-1.006-1.007V8.34c0-.556.451-1.007 1.006-1.007h1.104a.46.46 0 0 1 .458.458v.667a1.01 1.01 0 0 1-1.007 1.007zM4.122 7.78a.56.56 0 0 0-.56.56v.118a.56.56 0 0 0 .56.56h.555a.56.56 0 0 0 .56-.56v-.667a.012.012 0 0 0-.01-.011H4.121z"
        fill={primaryColor}
      />
      <Path
        d="M7.83 10.535a.223.223 0 0 1-.224-.223V6.963a.223.223 0 0 1 .447 0v3.349c0 .123-.1.223-.223.223Z"
        fill={secondaryColor}
      />
      <Path
        d="M7.855 5.574H6.574a.223.223 0 0 1-.158-.38l.9-.9h-.742a.223.223 0 0 1 0-.447h1.281a.223.223 0 0 1 .158.38l-.9.9h.742a.223.223 0 0 1 0 .447Zm2.453-1.467H9.026a.223.223 0 0 1-.157-.38l.9-.9h-.743a.223.223 0 0 1 0-.447h1.282a.223.223 0 0 1 .157.38l-.9.9h.743a.223.223 0 0 1 0 .447Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
