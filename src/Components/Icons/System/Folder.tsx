import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FolderProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Folder({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: FolderProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M19.4814 8.5H13.4814L11.7743 6.79281C11.5868 6.60531 11.3324 6.5 11.0671 6.5H6.48145C5.65301 6.5 4.98145 7.17156 4.98145 8V17C4.98145 17.8284 5.65301 18.5 6.48145 18.5H19.4814C20.3099 18.5 20.9814 17.8284 20.9814 17V10C20.9814 9.17156 20.3099 8.5 19.4814 8.5ZM19.4814 17H6.48145V8H10.8602L12.5674 9.70719C12.7549 9.89469 13.0093 10 13.2746 10H19.4814V17Z"/>
    </Svg>
  );
}
