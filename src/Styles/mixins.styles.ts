import { StyleSheet, Dimensions } from "react-native";

import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

export const getColumnWidth = (
  columns: number,
  smallSreen: boolean
): number => {
  const { width } = Dimensions.get("window");
  const gutter = smallSreen ? grid.mobileGutter : grid.borneGutter;
  const computedWidth = width - gutter * 2;
  const columnRatio = 100 / grid.columns;

  return ((columnRatio * computedWidth) / 100) * columns;
};

export const ImageStyle = StyleSheet.create({
  image: {
    width: "100%",
    maxHeight: "100%",
    resizeMode: "contain"
  }
});
