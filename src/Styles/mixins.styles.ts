import Theme from "~/Styles/theme.styles";

const { grid } = Theme;

export const gridColumnWidth = (numberOfColumns: number) => `
  width: calc((100vw / ${grid.columns}) * ${numberOfColumns});
  max-width: calc((${grid.maxWidth} / ${grid.columns}) * ${numberOfColumns});
`;

export const globalStyle = {
  page: () => `
    position: relative;
    padding: 50px 20px;
    width: 100%;
    min-height: 100%;
  `
};
