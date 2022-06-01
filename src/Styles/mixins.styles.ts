import { StyleSheet, Dimensions } from "react-native";

import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

export const getColumnWidth = (
  columns: number,
  smallSreen: boolean
): string => {
  const { width } = Dimensions.get("window");
  const gutter = smallSreen ? grid.mobileGutter : grid.borneGutter;
  const computedWidth = width - gutter * 2;
  const columnRatio = 100 / grid.columns;

  return `${((columnRatio * computedWidth) / 100) * columns}px`;
};

export const globalStyle = {
  pageBorne: () => `
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${grid.borneGutter}px
  `,
  pageMobile: () => `
    position: relative;
    padding: 50px ${grid.mobileGutter}px;
    width: 100%;
    height: 100%;
    min-height: 100%;
  `
};

export const ImageStyle = StyleSheet.create({
  image: {
    width: "100%",
    maxHeight: "100%",
    resizeMode: "contain"
  }
});
