import Svg, { Path } from "react-native-svg";

export default function UpArrow(): JSX.Element {
  return (
    <Svg width="121" height="183" viewBox="0 0 121 183">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="m65.264 35.008 20-35 3.473 1.984-20 35-3.473-1.984Z" fill="#fff"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="m119.085 21.779-35-18L85.915.22l35 18-1.83 3.558Z" fill="#fff"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M85.556 3.237a2 2 0 0 1 2.707.819c12.151 22.687 18.729 59.728 8.343 94.947-10.43 35.369-37.927 68.748-93.58 83.926a2 2 0 1 1-1.052-3.859c54.347-14.822 80.767-47.192 90.795-81.198 10.073-34.156 3.65-70.115-8.032-91.928a2 2 0 0 1 .819-2.707Z" fill="#fff"/>
    </Svg>
  );
}