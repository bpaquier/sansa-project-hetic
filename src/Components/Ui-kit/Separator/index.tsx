import { StyledView } from "./styles";

export interface SeparatorProps {
  theme?: "light" | "dark";
  orientation: "horizontal" | "vertical";
  columnWidth?: number;
  height?: string;
}

export default function Separator({
  theme = "dark",
  orientation,
  columnWidth,
  height
}: SeparatorProps): JSX.Element {
  return (
    <StyledView {...{ theme, orientation, columnWidth, height }}></StyledView>
  );
}
