import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LeftoversProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Leftovers({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: LeftoversProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M6.744 4.713a.223.223 0 0 1-.223-.223V2.833h-.833V4.49a.223.223 0 0 1-.446 0V2.61c0-.123.1-.223.223-.223h1.279c.123 0 .223.1.223.223v1.88c0 .123-.1.223-.223.223Z"
        fill={secondaryColor}
      />
      <Path
        d="M11.918 10.282a6.566 6.566 0 0 0-1.374-.496h-.003a8.165 8.165 0 0 0-.89-.167 3.797 3.797 0 0 0-.535-.929c.434-.372.687-.916.687-1.496A1.976 1.976 0 0 0 7.5 5.247V4.49c0-.123-.1-.223-.223-.223H4.93c-.123 0-.223.1-.223.223v1.922a1.82 1.82 0 0 1-.785 1.49 3.824 3.824 0 0 0-1.638 3.135 3.8 3.8 0 0 0 1.07 2.651.22.22 0 0 0 .16.068h9.201a.998.998 0 0 0 .892-.553c.07-.203.107-.412.107-.621 0-.889-.655-1.727-1.797-2.3zM7.5 5.702a1.53 1.53 0 0 1 1.322 2.652 3.826 3.826 0 0 0-.537-.453 1.82 1.82 0 0 1-.784-1.489v-.71zM4.18 8.267a2.265 2.265 0 0 0 .976-1.855V4.713h1.899v1.698c0 .737.364 1.43.975 1.856.22.152.42.331.598.531l.002.002a3.33 3.33 0 0 1 .511.767 9.181 9.181 0 0 0-.666-.025h-.07a8.448 8.448 0 0 0-2.49.382 6.16 6.16 0 0 0-.885.358c-1.142.573-1.797 1.411-1.797 2.3a1.78 1.78 0 0 0 .018.252 3.378 3.378 0 0 1 .93-4.567zm9.014 4.77a.551.551 0 0 1-.477.272H4.23a.552.552 0 0 1-.477-.272 1.427 1.427 0 0 1-.075-.455c0-.713.565-1.406 1.55-1.9l.45-.2a1.65 1.65 0 0 0-.005.2c.035.924.84 1.375.874 1.394a.223.223 0 1 0 .214-.392c-.025-.014-.616-.345-.642-1.019a1.182 1.182 0 0 1 .04-.35 7.89 7.89 0 0 1 1.86-.314 1.623 1.623 0 0 0-.122.681c.035.928.84 1.375.875 1.394a.224.224 0 0 0 .302-.09.224.224 0 0 0-.09-.302c-.006-.004-.615-.345-.642-1.019a1.201 1.201 0 0 1 .181-.676 8.29 8.29 0 0 1 1.663.173 1.62 1.62 0 0 0-.065.52c.035.927.84 1.375.875 1.394a.224.224 0 0 0 .302-.09.223.223 0 0 0-.09-.302c-.006-.004-.615-.345-.641-1.019a1.196 1.196 0 0 1 .053-.398c.397.11.765.248 1.095.414.986.495 1.551 1.187 1.551 1.9.002.153-.024.306-.074.456z"
        fill={primaryColor}
      />
    </Svg>
  );
}