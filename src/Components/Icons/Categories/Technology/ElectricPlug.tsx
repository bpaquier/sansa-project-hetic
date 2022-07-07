import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ElectricPlugProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function ElectricPlug({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ElectricPlugProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={secondaryColor}
        d="M10.536 5.352a.234.234 0 0 1-.234-.234V2.307a.292.292 0 0 0-.583 0v2.811a.234.234 0 1 1-.468 0V2.307a.761.761 0 0 1 1.52 0v2.811c0 .13-.105.234-.235.234ZM6.497 5.29a.234.234 0 0 1-.234-.235v-2.81a.292.292 0 0 0-.583 0v2.81a.234.234 0 1 1-.469 0v-2.81a.761.761 0 0 1 1.52 0v2.81c0 .13-.104.235-.234.235Z"
      />
      <Path
        fill={primaryColor}
        d="M7.981 14.66a.234.234 0 0 1-.234-.236l.009-1.926h-.133a.806.806 0 0 1-.805-.805v-.004h-.136a2.652 2.652 0 0 1-2.65-2.65v-2.49h-.237a.806.806 0 0 1 0-1.611l8.41.012a.806.806 0 0 1 0 1.61h-.255v2.485c0 1.46-1.189 2.65-2.65 2.65l-.136-.001a.806.806 0 0 1-.805.804h-.135l-.008 1.928a.234.234 0 0 1-.235.233Zm-.694-2.97v.003c0 .185.15.336.336.336h.736c.185 0 .337-.15.337-.336l-1.41-.003ZM4.502 6.55v2.489c0 1.202.978 2.18 2.18 2.18l2.619.006c1.201 0 2.18-.978 2.18-2.18V6.56L4.5 6.55Zm-.707-1.143a.337.337 0 0 0 0 .673l8.41.012a.337.337 0 0 0 0-.672l-8.41-.013Z"
      />
    </Svg>
  );
}
