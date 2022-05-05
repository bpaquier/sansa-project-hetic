import { StyledView } from "./styles";

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
  return (
    <StyledView
      {...{ theme, orientation, columnWidth, height, margin }}
    ></StyledView>
  );
}
