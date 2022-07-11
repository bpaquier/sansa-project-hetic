import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LeisureProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Leisure({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: LeisureProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M14.86 1.93a.223.223 0 0 0-.31.057l-1.012 1.478a.223.223 0 1 0 .368.252L14.92 2.24a.224.224 0 0 0-.058-.31zm-2.313 4.715a3.03 3.03 0 0 1 .582-1.793l.266-.388a.223.223 0 1 0-.369-.253l-.261.381a3.48 3.48 0 0 0-.664 2.053c0 .769.258 1.528.727 2.136a3.047 3.047 0 0 1-.32 4.082l-.112.106a3.05 3.05 0 0 1-4.082.108l-.556-.473.29-7.786v-.003c0-.01 0-.021-.002-.032V4.78l-.006-.029-.002-.006a.216.216 0 0 0-.009-.026l-.001-.002-.002-.005a.28.28 0 0 0-.013-.023l-.003-.005a.199.199 0 0 0-.042-.046l-.003-.003a.23.23 0 0 0-.025-.018l-.006-.003a.226.226 0 0 0-.028-.014l-4.51-1.77a.176.176 0 0 0-.02-.008l-.01-.002-.012-.002a.127.127 0 0 0-.012-.002l-.01-.001H3.29a.114.114 0 0 0-.012.003l-.023.005-.008.002a.23.23 0 0 0-.049.023l-.01.006-.01.008-.008.006-.008.008-.008.007-.007.008-.007.008-.007.01a.182.182 0 0 0-.006.008 3.105 3.105 0 0 1-.02.039l-1.77 4.509a.28.28 0 0 0-.008.03l-.002.006a.21.21 0 0 0-.004.03v.005a.248.248 0 0 0 .006.062l.001.006a.217.217 0 0 0 .009.025l.002.007.008.014.007.015.015.02.005.006a.215.215 0 0 0 .024.025l5.985 5.154.001.001.001.001.638.544a3.492 3.492 0 0 0 4.679-.124l.112-.106a3.493 3.493 0 0 0 .367-4.678 3.073 3.073 0 0 1-.635-1.864zM3.326 3.622l1.065 2.44L1.95 7.128l1.376-3.505zm1.653 2.671l2.61-1.138-.245 6.561L4.98 6.293zM4.8 5.884L3.735 3.443l3.506 1.376L4.8 5.884zm-.23.588l2.365 5.423L1.96 7.61l2.61-1.138z"
        fill={primaryColor}
      />
      <Path
        d="M15.673 4.103c-.05-.27-.34-.446-1.605-.476a.672.672 0 0 0-.587-.323c-.703-1.051-1.007-1.203-1.262-1.1-.173.07-.21.24-.239.377a1.4 1.4 0 0 1-.162.447c-.1.173-.208.272-.295.351-.102.093-.23.21-.198.391.044.259.356.334.473.362.238.057.589.093 1.067.107a.671.671 0 0 0 .743.409c.269.396.487.673.663.844.071.069.24.231.43.231a.325.325 0 0 0 .128-.026c.172-.071.201-.24.226-.377.02-.115.045-.26.137-.437.096-.184.204-.29.29-.377.1-.097.225-.22.191-.403zm-3.469-.85a1.82 1.82 0 0 0 .212-.574c.099.082.293.286.635.787a.674.674 0 0 0-.21.326c-.579-.02-.859-.07-.991-.107a1.78 1.78 0 0 0 .354-.432zm1.065.792a.244.244 0 0 1-.008-.042v-.004a.23.23 0 1 1 .336.187h-.001a.23.23 0 0 1-.327-.14zm1.527.632a1.791 1.791 0 0 0-.175.531c-.103-.091-.295-.302-.622-.78a.675.675 0 0 0 .162-.351c.607.02.883.075 1.005.114a1.819 1.819 0 0 0-.37.486z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
