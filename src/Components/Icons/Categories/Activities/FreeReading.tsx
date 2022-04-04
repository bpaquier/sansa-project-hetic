import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface FreeReadingProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function FreeReading({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: FreeReadingProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M8.642 4.648a.224.224 0 0 0-.282-.142L7 4.956a.223.223 0 0 0-.142.283l1.706 5.153a.223.223 0 0 0 .283.142l1.361-.451a.224.224 0 0 0 .142-.282L8.642 4.648Zm.275 5.392L7.351 5.31 8.289 5l1.566 4.73-.938.31Zm4.603-.997h-1.594a.223.223 0 0 0 0 .447h1.594a.223.223 0 0 0 0-.447ZM11.926 5.67h1.594a.223.223 0 0 0 0-.446h-1.594a.223.223 0 0 0 0 .446Zm-7.55.74c-.123 0-.223.1-.223.223v1.924a.223.223 0 0 0 .446 0V6.633c0-.123-.1-.223-.223-.223Z"
        fill={secondaryColor}
      />
      <Path
        d="M14.954 7.595h-1.211V4.4c0-.123-.1-.223-.223-.223h-1.594c-.123 0-.223.1-.223.223v5.683H7.289V4.4c0-.123-.1-.223-.224-.223H5.273c-.123 0-.224.1-.224.223v.434H3.48c-.122 0-.222.1-.222.224v2.536H2.046c-.124 0-.224.1-.224.223v3.924c0 .123.1.223.224.223h12.909c.123 0 .223-.1.223-.223V7.818c0-.123-.1-.223-.224-.223Zm-2.805-2.97h1.148v5.459h-1.148v-5.46Zm-6.653 0h1.346v5.459H5.496v-5.46Zm-1.793.657H5.05v4.802H3.703V5.282Zm11.028 6.237H2.269V8.042h.988v2.265c0 .124.1.224.223.224h8.399a.225.225 0 0 0 .048.005h1.593c.123 0 .223-.1.223-.223V8.042h.988v3.477Z"
        fill={primaryColor}
      />
    </Svg>
  );
}
