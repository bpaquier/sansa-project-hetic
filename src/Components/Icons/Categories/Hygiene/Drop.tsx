import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface DropProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Drop({
  primaryColor = theme?.color?.icon?.categories?.primary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: DropProps): JSX.Element {
  return (
    <Svg {...{ width, height }} viewBox="0 0 8 14" fill="none">
      <Path
        d="M3.99878 13.1827C1.88678 13.1827 0.168457 11.4644 0.168457 9.3524C0.168457 7.27203 3.54111 1.35724 3.8239 1.0391C3.86669 0.990725 3.92771 0.962446 3.99208 0.960585C4.05757 0.958353 4.11897 0.983655 4.16474 1.02905C4.47432 1.33826 7.82948 7.28543 7.82948 9.3524C7.82948 11.4644 6.11078 13.1827 3.99878 13.1827ZM4.00176 1.61324C3.26464 2.82217 0.636922 7.6564 0.636922 9.3524C0.636922 11.2062 2.14501 12.7139 3.99841 12.7139C5.85218 12.7139 7.36027 11.2058 7.36027 9.3524C7.36027 8.56915 6.77385 6.9431 5.70892 4.77417C5.01385 3.35798 4.32399 2.1338 4.00176 1.61324Z"
        fill={primaryColor}
      />
      <Path
        d="M4.05913 12.1822C3.92964 12.1822 3.82471 12.0772 3.82471 11.9477C3.82471 11.8183 3.92964 11.7133 4.05913 11.7133C5.34619 11.7133 6.39326 10.6663 6.39326 9.37919C6.39326 9.24971 6.49819 9.14478 6.62768 9.14478C6.75717 9.14478 6.8621 9.24971 6.8621 9.37919C6.86173 10.9249 5.60443 12.1822 4.05913 12.1822Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
