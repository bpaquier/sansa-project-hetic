import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LocationProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Position({
  color = theme?.color?.neutral?.black40,
  width = theme?.size?.icon?.system,
  height = theme?.size?.icon?.system
}: LocationProps): JSX.Element {
  return (
    <Svg width={height} height={width} viewBox="0 0 32 32" fill="none">
      <Path
        d="M17.5 27.25L17.5 24.8594C21.25 24.2031 24.2031 21.25 24.8594 17.5L27.25 17.5C27.625 17.5 28 17.125 28 16.75L28 15.25C28 14.8281 27.625 14.5 27.25 14.5L24.8594 14.5C24.2031 10.7031 21.25 7.75 17.5 7.09375L17.5 4.75C17.5 4.32813 17.125 4 16.75 4L15.25 4C14.8281 4 14.5 4.32813 14.5 4.75L14.5 7.09375C10.7031 7.75 7.75 10.7031 7.09375 14.5L4.75 14.5C4.32813 14.5 4 14.8281 4 15.25L4 16.75C4 17.125 4.32813 17.5 4.75 17.5L7.09375 17.5C7.75 21.25 10.7031 24.2031 14.5 24.8594L14.5 27.25C14.5 27.625 14.8281 28 15.25 28L16.75 28C17.125 28 17.5 27.625 17.5 27.25ZM10 16C10 12.6719 12.6719 10 16 10C19.2813 10 22 12.6719 22 16C22 19.2813 19.2813 22 16 22C12.6719 22 10 19.2813 10 16ZM20.125 16C20.125 13.7031 18.25 11.875 16 11.875C13.7031 11.875 11.875 13.7031 11.875 16C11.875 18.25 13.7031 20.125 16 20.125C18.25 20.125 20.125 18.25 20.125 16Z"
        fill={color}
      />
    </Svg>
  );
}
