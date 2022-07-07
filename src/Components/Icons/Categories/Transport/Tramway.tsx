import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface TramwayProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Tramway({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: TramwayProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={secondaryColor}
        d="m9.508 14.198-.656-1.73a.223.223 0 1 0-.417.16l.353.93H2.61l.37-.927a.223.223 0 1 0-.415-.165l-.69 1.729a.223.223 0 1 0 .415.165l.142-.355h6.525l.134.352a.223.223 0 1 0 .417-.159Zm-4.671-3.356H3.672a.223.223 0 0 1-.223-.224v-.683a.224.224 0 0 1 .24-.223l.836.063a.58.58 0 0 1 .535.577v.266c0 .124-.1.224-.223.224Zm-.941-.447h.718v-.043a.133.133 0 0 0-.123-.132l-.595-.045v.22Zm3.804.447H6.536a.223.223 0 0 1-.223-.224v-.266c0-.3.234-.554.534-.577l.836-.063a.223.223 0 0 1 .24.223v.683c0 .124-.1.224-.223.224Zm-.941-.447h.718v-.22l-.596.045a.133.133 0 0 0-.122.132v.043Z"
      />
      <Path
        fill={primaryColor}
        d="M7.71 6.207a1.974 1.974 0 0 0-.755-.15H4.46a1.974 1.974 0 0 0-.755.15 1.99 1.99 0 0 0-1.232 1.837v4.27a.68.68 0 0 0 .682.68h5.103a.682.682 0 0 0 .682-.68v-4.27a1.99 1.99 0 0 0-1.232-1.837zm-3.685.36a1.53 1.53 0 0 1 .436-.063h2.493c.152 0 .298.022.436.063v2.287l-1.682.195-1.683-.195V6.567zm-.446.215v2.27c0 .114.085.209.197.222l1.906.221a.197.197 0 0 0 .051 0l1.906-.221a.223.223 0 0 0 .197-.222v-2.27a1.54 1.54 0 0 1 .659 1.262v3.21H2.92v-3.21a1.54 1.54 0 0 1 .658-1.262zM6.327 11.7v.848H5.088V11.7h1.239zm-3.406.613V11.7h1.721v.848H3.156a.235.235 0 0 1-.235-.235zm5.338.235H6.773v-.847h1.722v.612c0 .13-.106.235-.236.235zm5.658-10.906H9.023c-.9 0-1.633.733-1.633 1.634 0 .123.1.223.223.223h4.612v7.656h-1.763c-.123 0-.223.1-.223.223v1.41c0 .124.1.224.223.224h3.455c.123 0 .223-.1.223-.223V1.865c0-.123-.1-.223-.223-.223zm-6.06 1.41a1.189 1.189 0 0 1 1.166-.964h4.671v.964H7.857zm4.814.446h1.023v7.657h-1.023V3.498zm1.023 9.067h-3.008V11.6h3.008v.964z"
      />
    </Svg>
  );
}
