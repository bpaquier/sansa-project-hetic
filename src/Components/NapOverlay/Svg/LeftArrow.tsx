import Svg, { Path } from "react-native-svg";

export default function LeftArrow(): JSX.Element {
  return (
    <Svg width="194" height="92" viewBox="0 0 194 92">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M192.932.23a2.001 2.001 0 0 1 .838 2.702c-16.217 30.792-51.747 47.728-88.973 56.514-37.316 8.808-76.882 9.56-101.957 7.547a2 2 0 0 1 .32-3.987c24.758 1.988 63.893 1.24 100.718-7.453 36.916-8.713 70.97-25.277 86.353-54.485a2 2 0 0 1 2.701-.838Z"
        fill="#fff"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m28.638 91.965-28.5-26.5 2.724-2.93 28.5 26.5-2.724 2.93Z"
        fill="#fff"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m25.53 41.79-21.5 25.5-3.06-2.58 21.5-25.5 3.058 2.58Z"
        fill="#fff"
      />
    </Svg>
  );
}
