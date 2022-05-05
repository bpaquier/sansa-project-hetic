import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface EurosProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Euros({
  color = theme?.color?.neutral?.black40,
  width = 24,
  height = 24
}: EurosProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
      <Path d="M17.5028 17.4302C17.4634 17.223 17.2678 17.0904 17.0701 17.1374C16.7493 17.2136 16.2474 17.3065 15.7073 17.3065C14.0044 17.3065 12.6495 16.2193 12.0635 14.6362H15.4742C15.5559 14.6362 15.6353 14.6073 15.6991 14.554C15.7629 14.5008 15.8075 14.4266 15.8254 14.3435L16.0166 13.4572C16.0672 13.2228 15.896 13 15.6654 13H11.6382C11.6019 12.5522 11.5958 12.116 11.6424 11.6798H16.0401C16.1222 11.6798 16.2019 11.6506 16.2659 11.597C16.3298 11.5434 16.3743 11.4686 16.3918 11.385L16.5872 10.4552C16.6363 10.2213 16.4654 10 16.2355 10H12.0872C12.7062 8.59403 13.9679 7.65531 15.6157 7.65531C16.0503 7.65531 16.4727 7.72563 16.7513 7.78484C16.9377 7.82447 17.1217 7.70678 17.1713 7.51537L17.5311 6.12888C17.5857 5.91822 17.4571 5.70338 17.2513 5.66272C16.8882 5.591 16.3029 5.5 15.6707 5.5C12.7552 5.5 10.4025 7.38287 9.53389 10H8.54164C8.34283 10 8.18164 10.1679 8.18164 10.375V11.3048C8.18164 11.5119 8.34283 11.6798 8.54164 11.6798H9.18871C9.15844 12.1051 9.15328 12.5951 9.18328 13H8.54164C8.34283 13 8.18164 13.1679 8.18164 13.375V14.2612C8.18164 14.4683 8.34283 14.6362 8.54164 14.6362H9.44506C10.1958 17.4591 12.5396 19.5 15.6707 19.5C16.4597 19.5 17.1276 19.358 17.5037 19.2566C17.6887 19.2068 17.8045 19.0157 17.7674 18.8205L17.5028 17.4302Z" />
    </Svg>
  );
}