import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ClockProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Clock({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: ClockProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M12.9814 4.75C8.7002 4.75 5.23145 8.21875 5.23145 12.5C5.23145 16.7812 8.7002 20.25 12.9814 20.25C17.2627 20.25 20.7314 16.7812 20.7314 12.5C20.7314 8.21875 17.2627 4.75 12.9814 4.75ZM12.9814 18.75C9.52832 18.75 6.73145 15.9531 6.73145 12.5C6.73145 9.04688 9.52832 6.25 12.9814 6.25C16.4346 6.25 19.2314 9.04688 19.2314 12.5C19.2314 15.9531 16.4346 18.75 12.9814 18.75ZM14.9127 15.4875L12.2596 13.5594C12.1627 13.4875 12.1064 13.375 12.1064 13.2563V8.125C12.1064 7.91875 12.2752 7.75 12.4814 7.75H13.4814C13.6877 7.75 13.8564 7.91875 13.8564 8.125V12.5531L15.9439 14.0719C16.1127 14.1937 16.1471 14.4281 16.0252 14.5969L15.4377 15.4062C15.3158 15.5719 15.0814 15.6094 14.9127 15.4875Z" />
    </Svg>
  );
}
