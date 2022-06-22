import Svg, { Path } from "react-native-svg";

export interface PingIconProps {
  width?: number;
  height?: number;
}

export default function PingIcon({
  width = 40,
  height = 54
}: PingIconProps): JSX.Element {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Path
        d="M17.9225 52.2309L17.9208 52.2288C15.2096 48.8595 10.8414 43.0946 7.15376 37.0313C5.30989 33.9995 3.64197 30.9025 2.43637 27.9995C1.22743 25.0886 0.5 22.4116 0.5 20.2085C0.5 9.31878 9.23519 0.5 20 0.5C30.7607 0.5 39.5 9.31884 39.5 20.2085C39.5 22.4109 38.7671 25.0875 37.5509 27.9986C36.338 30.9015 34.6613 33.9986 32.8114 37.0307C29.1121 43.0942 24.7437 48.8594 22.077 52.2316C20.9958 53.5897 19.0034 53.5895 17.9225 52.2309Z"
        fill="#002D4B"
        stroke="white"
      />
    </Svg>
  );
}
