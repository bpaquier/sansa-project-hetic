import Svg, { Path } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface TrashProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number;
  height?: number;
}

export default function Trash({
  primaryColor = theme?.color?.icon?.categories?.primary,
  secondaryColor = theme?.color?.icon?.categories?.secondary,
  width = theme?.size?.icon?.categories,
  height = theme?.size?.icon?.categories
}: TrashProps): JSX.Element {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        fill={primaryColor}
        d="M11.386 14.842H4.65c-.33 0-.642-.13-.876-.364a1.229 1.229 0 0 1-.362-.875l.006-9.372v-.705a.235.235 0 0 1 .469 0v.705l-.001 1.464-.006 7.908c0 .205.08.399.226.544a.765.765 0 0 0 .544.226h6.735a.763.763 0 0 0 .768-.77l-.019-9.309-.002-.84a.234.234 0 1 1 .469-.001l.002.84.019 9.31c0 .33-.128.642-.361.876a1.23 1.23 0 0 1-.876.363Z"
      />
      <Path
        fill={secondaryColor}
        d="M10.193 11.956a.234.234 0 0 1-.234-.234V5.92a.234.234 0 1 1 .468 0v5.802c0 .13-.105.234-.234.234Zm-2.173 0a.234.234 0 0 1-.235-.234V5.92a.234.234 0 1 1 .469 0v5.802c0 .13-.105.234-.234.234Zm-2.184 0a.234.234 0 0 1-.234-.234V5.92a.234.234 0 1 1 .469 0v5.802c0 .13-.105.234-.235.234Zm7.351-8.499L2.812 3.43a.234.234 0 0 1 .001-.469l10.375.028a.234.234 0 0 1 0 .47Z"
      />
      <Path
        fill={secondaryColor}
        d="M9.65 3.327a.234.234 0 0 1-.235-.234c0-.78-.734-1.323-1.393-1.323-.714 0-1.327.533-1.426 1.24a.234.234 0 1 1-.464-.065A1.916 1.916 0 0 1 8.022 1.3c.881 0 1.862.736 1.862 1.792 0 .13-.105.234-.234.234Z"
      />
    </Svg>
  );
}
