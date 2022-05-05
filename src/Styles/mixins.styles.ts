import { StyleSheet } from "react-native";

import Theme from "~/Styles/theme.styles";

const { grid, color } = Theme;

export const gridColumnWidth = (numberOfColumns: number) => `
  width: ${(100 / grid.columns) * numberOfColumns}%;
  max-width: ${(grid.maxWidth / grid.columns) * numberOfColumns}px;
`;

export const globalStyle = {
  page: () => `
    position: relative;
    padding: 50px 20px;
    width: 100%;
    min-height: 100%;
    background-color: ${color?.neutral?.black5};
  `,
  pageWrapper: () => `
    margin-bottom: 200px
  `
};

export const ImageStyle = StyleSheet.create({
  image: {
    width: "100%",
    maxHeight: "100%",
    resizeMode: "contain"
  }
});
