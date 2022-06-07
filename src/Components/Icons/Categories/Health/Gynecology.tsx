import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface GynecologyProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Gynecology({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: GynecologyProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M9.405 10.197a.223.223 0 0 1-.073-.434c.063-.023 1.549-.561 1.648-2.147.141-2.272 1.848-2.96 1.92-2.987a.223.223 0 1 1 .162.416c-.061.024-1.514.62-1.637 2.599-.117 1.878-1.871 2.514-1.946 2.54a.226.226 0 0 1-.074.013Z"
        fill={secondaryColor}
      />
      <Path
        d="M8 1.895a6.183 6.183 0 0 0-6.176 6.177A6.183 6.183 0 0 0 8 14.248a6.184 6.184 0 0 0 6.177-6.176A6.184 6.184 0 0 0 8 1.895zm0 11.907a5.74 5.74 0 0 1-5.73-5.73A5.74 5.74 0 0 1 8 2.342a5.74 5.74 0 0 1 5.73 5.73A5.74 5.74 0 0 1 8 13.802zm3.243-3.643l-.742-.088a1.508 1.508 0 0 0-.727.09 2.824 2.824 0 0 0-.49-.689l.04-.079a.766.766 0 0 0-.342-1.033.763.763 0 0 0-.969.239l-.275-.17a2.494 2.494 0 0 0 .713-1.15c.054-.19-.024-.35-.08-.468a.48.48 0 0 1-.062-.174.54.54 0 0 1 .009-.08 1.996 1.996 0 0 0-.682-1.88 2.488 2.488 0 0 0-1.533-.56 2.485 2.485 0 0 0-2.518 2.43 2.477 2.477 0 0 0 1.07 2.092l.003.002.01.007a.176.176 0 0 1 .023.015l.006.004a.057.057 0 0 0 .006.004c.163.113.987.726 1.157 1.661l.006.036.001.007c.153.827.743 1.554 1.579 1.945a3.93 3.93 0 0 0 1.617.366c.115 0 .227-.007.336-.019.512-.06.914-.465.976-.986l.013-.11a.056.056 0 0 1 .064-.05l.623.074a.724.724 0 0 0 .169-1.437zM4.96 8.306L4.95 8.3l-.005-.005a2.663 2.663 0 0 0-.029-.018l-.008-.006a2.031 2.031 0 0 1-.877-1.715 2.037 2.037 0 0 1 3.321-1.533c.418.342.62.901.525 1.46a.969.969 0 0 0-.015.154c0 .148.059.27.106.368.028.058.06.125.054.151a2.045 2.045 0 0 1-.798 1.114.223.223 0 0 0 .01.373l.57.351-.16.319a.082.082 0 0 1-.112.037l-.665-.334a.224.224 0 1 0-.2.4l.665.333a.526.526 0 0 0 .71-.236l.252-.501.002-.005.053-.104a.32.32 0 0 1 .433-.144.322.322 0 0 1 .144.434l-.367.728a1.24 1.24 0 0 1-1.658.552l-.62-.309c-.225-1.026-1.06-1.676-1.321-1.858zm6.473 2.604a.277.277 0 0 1-.308.242l-.62-.074a.5.5 0 0 0-.56.44l-.014.11a.67.67 0 0 1-.584.595c-.53.061-1.17-.054-1.713-.308a2.397 2.397 0 0 1-1.187-1.17l.254.127a1.688 1.688 0 0 0 2.256-.75l.112-.223a2.53 2.53 0 0 1 .317.485 1.567 1.567 0 0 0-.579 1.048.224.224 0 1 0 .444.054 1.11 1.11 0 0 1 .53-.834c.2-.118.43-.166.668-.138l.742.088a.274.274 0 0 1 .242.308z"
        fill={primaryColor}
      />
    </Svg>
  );
}