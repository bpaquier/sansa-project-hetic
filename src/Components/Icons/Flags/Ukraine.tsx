import Svg, { Path } from "react-native-svg";

export interface FranceProps {
  width?: number;
  height?: number;
}

export default function Ukraine({
  width = 60,
  height = 60
}: FranceProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 27 27">
      <Path
        d="M13.5 26.1562C20.5031 26.1562 26.1562 20.5031 26.1562 13.5H0.84375C0.84375 20.5031 6.49687 26.1562 13.5 26.1562Z"
        fill="#FFD600"
      />
      <Path
        d="M13.5 0.84375C6.49687 0.84375 0.84375 6.49687 0.84375 13.5H26.1562C26.1562 6.49687 20.5031 0.84375 13.5 0.84375Z"
        fill="#005BBC"
      />
    </Svg>
  );
}
