import Svg, { Path, G } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface HousingProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Housing({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: HousingProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M14.755 7.937h-.005a.27.27 0 0 1-.167-.056l-2.57-2.05a.191.191 0 0 1-.014-.298.275.275 0 0 1 .347-.011l2.545 2.027c.066.038.11.103.11.176 0 .118-.11.212-.246.212ZM9.813 4.002a.269.269 0 0 1-.167-.056l-1.253-.998a.193.193 0 0 1-.07-.209.232.232 0 0 1 .18-.152l.046-.01c.131-.026.263.042.296.154l1.135.905c.1.08.106.213.014.299a.267.267 0 0 1-.181.067Zm3.708 9.569c-.127 0-.235-.084-.245-.194a.187.187 0 0 1 .034-.126V7.724c0-.117.11-.211.246-.211s.246.094.246.211v5.633c0 .11-.098.202-.226.211l-.035.002-.02.001Z"
        fill={primaryColor}
      />
      <G fill={secondaryColor}>
        <Path d="M12.415 5.624c-.135 0-.245-.094-.245-.211l-.005-1.864c-.104-.027-.179-.11-.177-.207.003-.117.116-.21.25-.208l.177.003c.134.002.241.096.241.211l.005 2.064c0 .117-.11.212-.245.212Z" />
        <Path d="M12.405 5.972c-.136 0-.246-.094-.246-.211V3.534h-1.302v.788c0 .117-.11.212-.246.212s-.246-.095-.246-.212v-1c0-.116.11-.21.246-.21h1.794c.136 0 .246.094.246.21v2.439c0 .117-.11.211-.246.211Zm-2.289 7.598c-.136 0-.246-.094-.246-.21V9.047H7.179v4.311c0 .117-.11.211-.246.211s-.246-.094-.246-.211V8.836c0-.117.11-.211.246-.211h3.183c.136 0 .246.094.246.211v4.523c0 .117-.11.212-.246.212Z" />
      </G>
      <G fill={primaryColor}>
        <Path d="M2.246 7.94a.265.265 0 0 1-.182-.07.191.191 0 0 1 .016-.298l6.278-4.934a.276.276 0 0 1 .333.001l6.19 4.934a.19.19 0 0 1 .013.298.275.275 0 0 1-.348.012L8.523 3.082 2.412 7.884a.27.27 0 0 1-.166.055z" />
        <Path d="M13.559 13.572H3.425c-.136 0-.246-.095-.246-.212V6.936c0-.117.11-.211.246-.211s.245.094.245.211v6.213h9.642V7.126c0-.116.11-.211.246-.211s.246.095.246.211v6.234c0 .117-.11.212-.245.212z" />
      </G>
    </Svg>
  );
}
