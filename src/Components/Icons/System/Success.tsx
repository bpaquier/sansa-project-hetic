import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface SuccessProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Success({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: SuccessProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M20.2314 12.5C20.2314 16.7802 16.7617 20.25 12.4814 20.25C8.20123 20.25 4.73145 16.7802 4.73145 12.5C4.73145 8.21978 8.20123 4.75 12.4814 4.75C16.7617 4.75 20.2314 8.21978 20.2314 12.5ZM11.585 16.6036L17.335 10.8536C17.5303 10.6583 17.5303 10.3417 17.335 10.1465L16.6279 9.43937C16.4327 9.24409 16.1161 9.24409 15.9208 9.43937L11.2314 14.1287L9.0421 11.9393C8.84685 11.7441 8.53026 11.7441 8.33498 11.9393L7.62788 12.6464C7.43263 12.8417 7.43263 13.1583 7.62788 13.3535L10.8779 16.6035C11.0732 16.7988 11.3897 16.7988 11.585 16.6036Z"/>
    </Svg>
  );
}
