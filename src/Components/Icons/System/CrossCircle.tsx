import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CrossCircleProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function CrossCircle({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: CrossCircleProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 4.75C7.71875 4.75 4.25 8.21875 4.25 12.5C4.25 16.7812 7.71875 20.25 12 20.25C16.2812 20.25 19.75 16.7812 19.75 12.5C19.75 8.21875 16.2812 4.75 12 4.75ZM12 18.75C8.54688 18.75 5.75 15.9531 5.75 12.5C5.75 9.04688 8.54688 6.25 12 6.25C15.4531 6.25 18.25 9.04688 18.25 12.5C18.25 15.9531 15.4531 18.75 12 18.75ZM15.1812 10.5563L13.2375 12.5L15.1812 14.4438C15.3281 14.5906 15.3281 14.8281 15.1812 14.975L14.475 15.6812C14.3281 15.8281 14.0906 15.8281 13.9438 15.6812L12 13.7375L10.0563 15.6812C9.90938 15.8281 9.67188 15.8281 9.525 15.6812L8.81875 14.975C8.67188 14.8281 8.67188 14.5906 8.81875 14.4438L10.7625 12.5L8.81875 10.5563C8.67188 10.4094 8.67188 10.1719 8.81875 10.025L9.525 9.31875C9.67188 9.17188 9.90938 9.17188 10.0563 9.31875L12 11.2625L13.9438 9.31875C14.0906 9.17188 14.3281 9.17188 14.475 9.31875L15.1812 10.025C15.3281 10.1719 15.3281 10.4094 15.1812 10.5563Z" />
    </Svg>
  );
}
