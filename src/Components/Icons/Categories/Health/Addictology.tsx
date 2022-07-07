import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface AddictologyProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Addictology({
  primaryColor = theme?.color?.icon?.categories?.primary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: AddictologyProps): JSX.Element {
  return (
    <Svg {...{ width, height }} viewBox="0 0 14 14" fill="none">
      <Path
        d="M4.81264 3.86506L5.23348 1.75157H8.73302L9.34883 4.84552C9.39349 5.06878 9.40577 5.29427 9.38753 5.51529H6.4625L6.90902 5.9618H9.30716C9.2186 6.28106 9.06418 6.58246 8.84762 6.84664C8.68651 7.04311 8.49786 7.20943 8.29023 7.34338L8.61209 7.66525C8.82679 7.51604 9.02251 7.33706 9.19255 7.1298C9.51516 6.73687 9.72242 6.27362 9.80353 5.78618C9.80539 5.77762 9.80688 5.76869 9.80763 5.75939C9.85897 5.43157 9.85302 5.09334 9.78642 4.75808L9.13488 1.48441C9.11404 1.37985 9.02251 1.30469 8.91609 1.30469H5.05004C4.94362 1.30469 4.85171 1.37985 4.83125 1.48441L4.43311 3.48515L4.81264 3.86506Z"
        fill={primaryColor}
      />
      <Path
        d="M8.38124 12.7241H7.20691V8.16601C7.56003 8.13884 7.90012 8.04619 8.21342 7.89698L7.87445 7.55801C7.59463 7.66889 7.29324 7.72805 6.98328 7.72805C6.25808 7.72805 5.57863 7.40656 5.11873 6.84619C4.90217 6.58238 4.74812 6.28061 4.65919 5.96136H6.2778L5.83128 5.51485H4.57882C4.56059 5.29345 4.57324 5.06833 4.61752 4.84508L4.70794 4.3915L4.3284 4.01196L4.17994 4.75801C4.11333 5.09289 4.10738 5.43112 4.15873 5.75931C4.15947 5.76824 4.16096 5.77717 4.16282 5.7861C4.24356 6.27354 4.45119 6.73643 4.7738 7.12973C5.27128 7.73624 5.98608 8.10647 6.7604 8.16638V12.7245H5.58608C5.46291 12.7245 5.36282 12.8246 5.36282 12.9478C5.36282 13.0709 5.46291 13.171 5.58608 13.171H8.38161C8.50477 13.171 8.60487 13.0709 8.60487 12.9478C8.60487 12.8246 8.5044 12.7241 8.38124 12.7241Z"
        fill={primaryColor}
      />
      <Path
        d="M12.9669 13.19C12.9096 13.19 12.8527 13.1681 12.8091 13.1245L0.875361 1.19078C0.788291 1.10371 0.788291 0.962314 0.875361 0.874873C0.962431 0.787803 1.10383 0.787803 1.1909 0.874873L13.1247 12.809C13.2117 12.8961 13.2117 13.0375 13.1247 13.1249C13.0811 13.1684 13.0242 13.19 12.9669 13.19Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
