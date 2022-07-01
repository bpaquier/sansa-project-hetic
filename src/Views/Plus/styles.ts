import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

export type TextPlusWrapperProps = {
  marginTop?: number;
};

type PlusContainersProps = {
  marginBottom?: boolean;
  border?: boolean;
  columnWidth?: number;
  paddingTop?: number;
  paddingX?: number;
  paddingBottom?: number;
  height?: number;
};

const { color, shape, sizes, grid } = Theme;

export const PageWrapperMobile = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PageWrapperBorne = styled.View`
  width: ${getColumnWidth(21, false)};
  margin-left: ${getColumnWidth(3, false)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  align-content: space-between;
  position: relative;
`;

const generalPlusContainer = `
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  overflow: hidden;
  z-index: 0;
`;

const getBorderPlusContainer = (border?: boolean) =>
  border && `border: 1px solid ${color.primary.blueDark}`;

const getMarginBottom = (marginSize: number, marginBottom?: boolean) =>
  `${marginBottom ? marginSize : 0}px`;

export const PlusContainersBorne = styled.View<PlusContainersProps>`
  ${generalPlusContainer}
  ${({ border }) => getBorderPlusContainer(border)};
  width: ${({ columnWidth }) =>
    columnWidth
      ? getColumnWidth(columnWidth, false)
      : getColumnWidth(grid.columns / 2, false)};
  ${({ height }) => height && `height: ${height}px`};
  padding: ${({ paddingTop, paddingBottom, paddingX }) =>
    `${paddingTop ?? 40}px ${paddingX ?? 48}px ${paddingBottom ?? 40}px ${
      paddingX ?? 40
    }px`};
  margin-right: ${getColumnWidth(1, false)};
  margin-bottom: ${({ marginBottom }) => getMarginBottom(48, marginBottom)};
`;

export const PlusContainersMobile = styled.View<PlusContainersProps>`
  ${generalPlusContainer}
  ${({ border }) => getBorderPlusContainer(border)};
  width: 100%;
  padding: 24px ${getColumnWidth(1, true)};
  margin-bottom: ${({ marginBottom }) => getMarginBottom(24, marginBottom)};
`;

export const TextPlusWrapper = styled.Pressable<TextPlusWrapperProps>`
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`;

export const PagePlusBorneIllustrationWrapper = styled.View`
  position: absolute;
  right: 0;
  bottom: -90px;
`;
