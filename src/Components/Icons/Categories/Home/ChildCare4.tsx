import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface ChildCare4Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function ChildCare4({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: ChildCare4Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M10.835 4.93c-.267-.061-.736-.22-.875-.594-.134-.363.05-.902.53-1.556a.223.223 0 1 0-.358-.265c-.584.793-.783 1.457-.59 1.975.063.17.16.31.28.425a1.357 1.357 0 0 1-.586-.333c-.377-.377-.463-.993-.25-1.785a.223.223 0 1 0-.43-.117c-.327 1.206.018 1.872.364 2.218.382.381.919.531 1.395.531.19 0 .372-.024.53-.067a.223.223 0 0 0-.01-.432zm-6.59 3.309c-.627 0-1.138.465-1.138 1.037a.223.223 0 0 0 .447 0c0-.325.31-.59.691-.59s.692.264.692.59a.223.223 0 0 0 .446 0c0-.572-.51-1.037-1.138-1.037z"
        fill={secondaryColor}
      />
      <Path
        d="M8.077 6.02a.76.76 0 0 0-.655.378.223.223 0 0 0 .387.223.311.311 0 0 1 .537 0 .223.223 0 1 0 .386-.223.759.759 0 0 0-.655-.378zm3.379 0a.76.76 0 0 0-.655.378.223.223 0 1 0 .386.223.31.31 0 0 1 .538 0 .223.223 0 0 0 .305.082.224.224 0 0 0 .081-.305.759.759 0 0 0-.655-.378zM9.768 8.01c-.527 0-.924.267-.924.62s.397.622.924.622.923-.267.923-.621-.397-.621-.923-.621zm0 .796c-.308 0-.477-.132-.477-.175s.17-.175.477-.175.477.131.477.175-.17.175-.477.175zm5.029-2.343a.942.942 0 0 0-.755-.477h-.01l-.191-.006a4.111 4.111 0 0 0-4.073-3.593A4.11 4.11 0 0 0 5.695 5.98l-.194.005h-.01a.941.941 0 0 0-.774 1.37.944.944 0 0 0 .837.515l.353.001a4.11 4.11 0 0 0 .653 1.164 3.42 3.42 0 0 0-.243 1.271c0 1.098.209 1.867.656 2.422.558.692 1.472 1.028 2.794 1.028 3.058 0 3.45-1.844 3.45-3.45 0-.44-.082-.867-.242-1.27a4.13 4.13 0 0 0 .653-1.165h.35a.946.946 0 0 0 .837-.516.94.94 0 0 0-.018-.892zm-9.242.961a.498.498 0 0 1-.037-.993l.145-.004v.069c.001.319.04.63.11.928h-.218zm6.665 5.024c-.465.58-1.267.861-2.453.861-2.64 0-3.003-1.443-3.003-3.003a2.99 2.99 0 0 1 .136-.895 4.12 4.12 0 0 0 1.233.831c.203.814.874 1.393 1.634 1.393s1.43-.579 1.634-1.393a4.13 4.13 0 0 0 1.233-.83 2.98 2.98 0 0 1 .136.894c0 .994-.174 1.674-.55 2.142zm-3.546-2.014a4.095 4.095 0 0 0 2.187 0c-.217.454-.634.755-1.093.755s-.877-.301-1.094-.755zm1.094-.299a3.663 3.663 0 0 1-3.659-3.65 3.663 3.663 0 0 1 3.659-3.652 3.663 3.663 0 0 1 3.658 3.651 3.662 3.662 0 0 1-3.658 3.651zm4.65-2.982a.494.494 0 0 1-.44.27l-.216.001c.07-.298.109-.609.11-.928v-.068l.142.004a.49.49 0 0 1 .394.25.488.488 0 0 1 .01.47zm-8.903 1.9H1.303a.223.223 0 0 0 0 .446h1.45v.142c0 .663.539 1.203 1.202 1.203h.58c.663 0 1.203-.54 1.203-1.203v-.365c0-.123-.1-.223-.223-.223zm-.224.588a.757.757 0 0 1-.756.756h-.58a.757.757 0 0 1-.756-.756v-.142H5.29v.142z"
        fill={primaryColor}
      />
    </Svg>
  );
}
