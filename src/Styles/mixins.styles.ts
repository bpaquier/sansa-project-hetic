import { StyleSheet } from "react-native";

import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

export const gridColumnWidth = (numberOfColumns: number) => `
  width: ${(100 / grid.columns) * numberOfColumns}%;
  max-width: ${(grid.mobileMAxWidth / grid.columns) * numberOfColumns}px;
`;

export const bornMaxWidth = (numberOfColumns: number) => `
  max-width: ${(grid?.borneMaxWidth / grid.columns) * numberOfColumns}px;
`;

export const globalStyle = {
  pageMobile: () => `
    position: relative;
    padding: 50px 20px;
    width: 100%;
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
