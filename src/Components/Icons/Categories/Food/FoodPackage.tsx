import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FoodPackageProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function FoodPackage({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: FoodPackageProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <G fill={primaryColor}>
        <Path d="M10.688 11.419H6.011a.223.223 0 0 1 0-.447h4.454v-6.87H2.766V6.05a.223.223 0 0 1-.446 0V3.88c0-.124.1-.224.223-.224h8.146c.123 0 .223.1.223.223v7.317c0 .123-.1.223-.224.223Zm-6.814 0h-1.33a.223.223 0 0 1-.224-.223v-2.56a.223.223 0 0 1 .446 0v2.336h1.108a.223.223 0 1 1 0 .447Z" />
        <Path d="M14.458 11.419h-.814a.223.223 0 0 1 0-.447h.59V8.689h-3.323v2.284h.59a.223.223 0 0 1 0 .447h-.81a.225.225 0 0 1-.226-.223V8.465c0-.123.1-.223.223-.223h3.77c.123 0 .223.1.223.223v2.73c0 .124-.1.224-.223.224Z" />
        <Path d="M14.458 8.688h-3.77a.223.223 0 0 1-.223-.223V5.53c0-.123.1-.223.223-.223h1.488c.643 0 1.234.375 1.505.957l.98 2.105a.223.223 0 0 1-.203.318zm-3.547-.446h3.197l-.832-1.788a1.22 1.22 0 0 0-1.1-.7h-1.265v2.488zm-5.969 4.245a1.292 1.292 0 0 1 0-2.583 1.293 1.293 0 0 1 0 2.583zm0-2.136a.846.846 0 0 0 0 1.69.846.846 0 0 0 0-1.69zm7.638 2.136a1.292 1.292 0 0 1 0-2.583c.712 0 1.292.58 1.292 1.292s-.58 1.291-1.292 1.291zm0-2.136a.846.846 0 0 0 0 1.69.846.846 0 0 0 0-1.69z" />
      </G>
      <G fill={secondaryColor}>
        <Path d="M8.706 7.566H1.542a.223.223 0 0 1 0-.446h7.164a.223.223 0 0 1 0 .446Z" />
        <Path d="M7.318 8.707a.224.224 0 0 1-.142-.396l1.388-1.14a.224.224 0 0 1 .284.345l-1.389 1.14a.222.222 0 0 1-.141.05Z" />
        <Path d="M8.706 7.566a.22.22 0 0 1-.141-.05l-1.389-1.14a.223.223 0 1 1 .284-.346l1.388 1.14a.223.223 0 0 1-.142.396Z" />
      </G>
    </Svg>
  );
}
