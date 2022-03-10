import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CalendarProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Calendar({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: CalendarProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M18.4814 6.5H16.9814V4.875C16.9814 4.66875 16.8127 4.5 16.6064 4.5H15.3564C15.1502 4.5 14.9814 4.66875 14.9814 4.875V6.5H10.9814V4.875C10.9814 4.66875 10.8127 4.5 10.6064 4.5H9.35645C9.1502 4.5 8.98145 4.66875 8.98145 4.875V6.5H7.48145C6.65332 6.5 5.98145 7.17188 5.98145 8V19C5.98145 19.8281 6.65332 20.5 7.48145 20.5H18.4814C19.3096 20.5 19.9814 19.8281 19.9814 19V8C19.9814 7.17188 19.3096 6.5 18.4814 6.5ZM18.2939 19H7.66895C7.56582 19 7.48145 18.9156 7.48145 18.8125V9.5H18.4814V18.8125C18.4814 18.9156 18.3971 19 18.2939 19Z" />
    </Svg>
  );
}
