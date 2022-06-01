import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface Housing1Props {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Housing1({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: Housing1Props): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="m14.086 7.526-2.018-1.898V2.682c0-.123-.1-.223-.223-.223h-1.742c-.123 0-.223.1-.223.223v.887L8.154 1.945a.223.223 0 0 0-.306 0L2.916 6.584l-.015.013-.987.93a.223.223 0 0 0 .305.325l.62-.583v6.767c0 .123.1.223.223.223h9.874c.124 0 .224-.1.224-.223V7.268l.62.584a.223.223 0 1 0 .306-.326Zm-3.76-4.62h1.296v2.302l-1.295-1.219V2.905Zm2.387 10.906H3.285V6.85l4.716-4.435 4.712 4.433v6.965Z"
        fill={primaryColor}
      />
      <Path
        d="M8.52 7.481a.223.223 0 0 0-.446 0c0 .299-.11.438-.25.614-.153.195-.345.437-.345.891s.192.697.346.891c.14.177.25.316.25.615s-.11.438-.25.614c-.154.195-.346.437-.346.891a.223.223 0 0 0 .447 0c0-.299.11-.438.25-.614.153-.195.345-.437.345-.891s-.192-.697-.346-.891c-.14-.177-.25-.316-.25-.615s.11-.438.25-.614c.154-.195.346-.437.346-.89zm-1.793 0a.223.223 0 0 0-.446 0c0 .299-.11.438-.25.614-.154.195-.345.437-.345.891s.191.697.345.891c.14.177.25.316.25.615s-.11.438-.25.614c-.154.195-.345.437-.345.891a.223.223 0 0 0 .446 0c0-.299.11-.438.25-.614.154-.195.345-.437.345-.891s-.191-.697-.345-.891c-.14-.177-.25-.316-.25-.615s.11-.438.25-.614c.153-.195.345-.437.345-.89zm2.992 1.505c0-.299.11-.438.25-.614.154-.194.345-.437.345-.89a.223.223 0 0 0-.446 0c0 .298-.11.437-.25.613-.154.195-.346.437-.346.891s.192.697.346.891c.14.177.25.316.25.615s-.11.438-.25.614c-.154.195-.346.437-.346.891a.223.223 0 0 0 .447 0c0-.299.11-.438.25-.614.154-.195.345-.437.345-.891s-.191-.697-.345-.891c-.14-.177-.25-.316-.25-.615z"
        fill={secondaryColor}
      />
    </Svg>
  );
}
