import { StyledView } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface SeparatorProps {
  theme?: "light" | "dark";
  orientation: "horizontal" | "vertical";
  columnWidth?: number;
  height?: string;
  width?: string;
  margin?: number;
  customColor?: string;
}

export default function Separator({
  theme = "dark",
  orientation,
  columnWidth,
  height,
  width,
  margin,
  customColor
}: SeparatorProps): JSX.Element {
  const { isMobile } = useGlobalContext();
  return (
    <StyledView
      {...{
        theme,
        orientation,
        columnWidth,
        height,
        width,
        margin,
        isMobile,
        customColor
      }}
    ></StyledView>
  );
}
