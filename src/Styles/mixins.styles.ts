import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

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
  `
};
