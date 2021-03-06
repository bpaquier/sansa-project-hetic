import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CompressProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Compress({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: CompressProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M18.625 10.5H14.75C14.3344 10.5 14 10.1656 14 9.75V5.875C14 5.66875 14.1687 5.5 14.375 5.5H15.625C15.8313 5.5 16 5.66875 16 5.875V8.5H18.625C18.8313 8.5 19 8.66875 19 8.875V10.125C19 10.3313 18.8313 10.5 18.625 10.5ZM10 9.75V5.875C10 5.66875 9.83125 5.5 9.625 5.5H8.375C8.16875 5.5 8 5.66875 8 5.875V8.5H5.375C5.16875 8.5 5 8.66875 5 8.875V10.125C5 10.3313 5.16875 10.5 5.375 10.5H9.25C9.66563 10.5 10 10.1656 10 9.75ZM10 19.125V15.25C10 14.8344 9.66563 14.5 9.25 14.5H5.375C5.16875 14.5 5 14.6687 5 14.875V16.125C5 16.3313 5.16875 16.5 5.375 16.5H8V19.125C8 19.3313 8.16875 19.5 8.375 19.5H9.625C9.83125 19.5 10 19.3313 10 19.125ZM16 19.125V16.5H18.625C18.8313 16.5 19 16.3313 19 16.125V14.875C19 14.6687 18.8313 14.5 18.625 14.5H14.75C14.3344 14.5 14 14.8344 14 15.25V19.125C14 19.3313 14.1687 19.5 14.375 19.5H15.625C15.8313 19.5 16 19.3313 16 19.125Z" />
    </Svg>
  );
}
