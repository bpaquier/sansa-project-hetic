import Svg, { Path } from "react-native-svg";

export interface FranceProps {
  width?: number;
  height?: number;
  disabled?: boolean;
}

export default function France({
  width = 60,
  height = 60,
  disabled
}: FranceProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 65 64">
      <Path
        d="M2.5 32C2.5 45.1 10.9 56.2 22.5 60.3L22.5 3.70001C10.9 7.80001 2.5 18.9 2.5 32Z"
        fill={disabled ? "#848484" : "#428BC1"}
      />
      <Path
        d="M62.5 32C62.5 18.9 54.2 7.80001 42.5 3.70001V60.3C54.2 56.2 62.5 45.1 62.5 32Z"
        fill={disabled ? "#7A7A7A" : "#ED4C5C"}
      />
      <Path
        d="M22.5 60.3C25.6 61.4 29 62 32.5 62C36 62 39.4 61.4 42.5 60.3V3.7C39.4 2.6 36 2 32.5 2C29 2 25.6 2.6 22.5 3.7L22.5 60.3Z"
        fill="#F9F9F9"
      />
    </Svg>
  );
}
