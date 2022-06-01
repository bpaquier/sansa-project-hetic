import { StyledView } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface SeparatorProps {
  theme?: "light" | "dark";
  orientation: "horizontal" | "vertical";
  columnWidth?: number;
  height?: string;
  margin?: number;
}

export default function Separator({
  theme = "dark",
  orientation,
  columnWidth,
  height,
  margin
}: SeparatorProps): JSX.Element {
  const { isMobile } = useGlobalContext();
  return (
    <StyledView
      {...{ theme, orientation, columnWidth, height, margin, isMobile }}
    ></StyledView>
  );
}
