import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface BagsProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Bags({
  primaryColor = theme?.color?.icon?.categories?.primary,
  width = theme?.sizes?.icon?.categories,
  height = theme?.sizes?.icon?.categories
}: BagsProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 12" fill="none">
      <Path
        d="M9.42042 2.29845H8.93298V1.50031C8.93298 1.23463 8.7168 1.01845 8.45112 1.01845H5.69391C5.42824 1.01845 5.21205 1.23463 5.21205 1.50031V2.28022H4.72461V1.50031C4.72461 0.965611 5.15959 0.531006 5.69391 0.531006H8.45112C8.98582 0.531006 9.42042 0.965983 9.42042 1.50031V2.29845Z"
        fill={primaryColor}
      />
      <Path
        d="M12.7685 7.34253H1.19531V7.82997H12.7685V7.34253Z"
        fill={primaryColor}
      />
      <Path
        d="M8.43743 9.161H5.70515C5.57045 9.161 5.46143 9.05198 5.46143 8.91728V7.72249C5.46143 7.58779 5.57045 7.47877 5.70515 7.47877C5.83984 7.47877 5.94887 7.58779 5.94887 7.72249V8.67356H8.19371V7.66779C8.19371 7.5331 8.30273 7.42407 8.43743 7.42407C8.57212 7.42407 8.68115 7.5331 8.68115 7.66779V8.91728C8.68152 9.05161 8.57212 9.161 8.43743 9.161Z"
        fill={primaryColor}
      />
      <Path
        d="M11.3535 11.6118H2.64654C1.71185 11.6118 0.95166 10.8517 0.95166 9.91697V3.82208C0.95166 2.88738 1.71185 2.1272 2.64654 2.1272H11.3535C12.2882 2.1272 13.0484 2.88738 13.0484 3.82208V9.91697C13.0484 10.8517 12.2882 11.6118 11.3535 11.6118ZM2.64654 2.61464C1.98087 2.61464 1.4391 3.15641 1.4391 3.82208V9.91697C1.4391 10.5826 1.98087 11.1244 2.64654 11.1244H11.3535C12.0192 11.1244 12.561 10.5826 12.561 9.91697V3.82208C12.561 3.15641 12.0192 2.61464 11.3535 2.61464H2.64654Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
