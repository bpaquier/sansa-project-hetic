import Svg, { Path, Rect, G, Defs, ClipPath } from "react-native-svg";

import theme from "~/Styles/theme.styles";

export interface LocationProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function Position({
  width = theme?.sizes?.icon?.system,
  height = theme?.sizes?.icon?.system
}: LocationProps): JSX.Element {
  return (
    <Svg {...{ width, height }} viewBox="0 0 40 40" fill="none">
      <Rect x="1" y="1" width="38" height="38" rx="19" fill="white" />
      <G clipPath="url(#clip0_2669_44543)">
        <Path
          d="M21 27.5V25.9063C23.5 25.4687 25.4687 23.5 25.9063 21H27.5C27.75 21 28 20.75 28 20.5V19.5C28 19.2187 27.75 19 27.5 19H25.9063C25.4687 16.4688 23.5 14.5 21 14.0625V12.5C21 12.2187 20.75 12 20.5 12L19.5 12C19.2187 12 19 12.2187 19 12.5V14.0625C16.4688 14.5 14.5 16.4688 14.0625 19H12.5C12.2187 19 12 19.2187 12 19.5L12 20.5C12 20.75 12.2187 21 12.5 21H14.0625C14.5 23.5 16.4688 25.4687 19 25.9063V27.5C19 27.75 19.2187 28 19.5 28H20.5C20.75 28 21 27.75 21 27.5ZM16 20C16 17.7813 17.7813 16 20 16C22.1875 16 24 17.7813 24 20C24 22.1875 22.1875 24 20 24C17.7813 24 16 22.1875 16 20ZM22.75 20C22.75 18.4688 21.5 17.25 20 17.25C18.4688 17.25 17.25 18.4688 17.25 20C17.25 21.5 18.4688 22.75 20 22.75C21.5 22.75 22.75 21.5 22.75 20Z"
          fill="#55789B"
        />
      </G>
      <Rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="19"
        stroke="#55789B"
        stroke-width="2"
      />
      <Defs>
        <ClipPath id="clip0_2669_44543">
          <Rect
            width="16"
            height="16"
            fill="white"
            transform="translate(12 12)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
