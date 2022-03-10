import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface DangerProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Danger({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: DangerProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M20.2314 12.5C20.2314 16.7812 16.7614 20.25 12.4814 20.25C8.20154 20.25 4.73145 16.7812 4.73145 12.5C4.73145 8.22134 8.20154 4.75 12.4814 4.75C16.7614 4.75 20.2314 8.22134 20.2314 12.5ZM12.4814 14.0625C11.6875 14.0625 11.0439 14.7061 11.0439 15.5C11.0439 16.2939 11.6875 16.9375 12.4814 16.9375C13.2754 16.9375 13.9189 16.2939 13.9189 15.5C13.9189 14.7061 13.2754 14.0625 12.4814 14.0625ZM11.1167 8.89544L11.3485 13.1454C11.3593 13.3443 11.5238 13.5 11.7229 13.5H13.24C13.4391 13.5 13.6036 13.3443 13.6144 13.1454L13.8462 8.89544C13.8579 8.68063 13.6869 8.5 13.4718 8.5H11.4911C11.2759 8.5 11.1049 8.68063 11.1167 8.89544V8.89544Z" />
    </Svg>
  );
}
