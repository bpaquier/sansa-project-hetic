import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface CommentProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Comment({
  color = theme?.color?.neutral?.black40,
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: CommentProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 15" fill="none">
      <Path
        d="M9.00004 0.894745C4.56254 0.894745 1.00004 3.83224 1.00004 7.39474C1.00004 8.89474 1.59379 10.2697 2.62504 11.3635C2.18754 12.5822 1.21879 13.6447 1.18754 13.6447C0.968788 13.8635 0.937538 14.176 1.03129 14.4572C1.15629 14.7385 1.43754 14.8947 1.75004 14.8947C3.65629 14.8947 5.18754 14.1135 6.09379 13.4572C7.00004 13.7385 7.96879 13.8947 9.00004 13.8947C13.4063 13.8947 17 10.9885 17 7.39474C17 3.83224 13.4063 0.894745 9.00004 0.894745ZM9.00004 12.3947C8.15629 12.3947 7.31254 12.2697 6.53129 12.0197L5.81254 11.801L5.21879 12.2385C4.78129 12.551 4.15629 12.8947 3.40629 13.1447C3.65629 12.7697 3.87504 12.3322 4.03129 11.8947L4.37504 11.0197L3.71879 10.3322C3.15629 9.73849 2.50004 8.73849 2.50004 7.39474C2.50004 4.64474 5.40629 2.39474 9.00004 2.39474C12.5625 2.39474 15.5 4.64474 15.5 7.39474C15.5 10.176 12.5625 12.3947 9.00004 12.3947Z"
        fill={color}
      />
    </Svg>
  );
}
