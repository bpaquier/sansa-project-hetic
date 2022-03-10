import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FilterProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Filter({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: FilterProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M19.7812 18.3344L16.6656 15.2188C16.525 15.0781 16.3344 15 16.1344 15H15.625C16.4875 13.8969 17 12.5094 17 11C17 7.40937 14.0906 4.5 10.5 4.5C6.90937 4.5 4 7.40937 4 11C4 14.5906 6.90937 17.5 10.5 17.5C12.0094 17.5 13.3969 16.9875 14.5 16.125V16.6344C14.5 16.8344 14.5781 17.025 14.7188 17.1656L17.8344 20.2812C18.1281 20.575 18.6031 20.575 18.8938 20.2812L19.7781 19.3969C20.0719 19.1031 20.0719 18.6281 19.7812 18.3344ZM10.5 15C8.29063 15 6.5 13.2125 6.5 11C6.5 8.79063 8.2875 7 10.5 7C12.7094 7 14.5 8.7875 14.5 11C14.5 13.2094 12.7125 15 10.5 15Z" />
    </Svg>
  );
}
