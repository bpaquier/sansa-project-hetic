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
  paddingY?: number;
};

const { color, shape, sizes, grid } = Theme;

export const PageWrapperMobile = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PageWrapperBorne = styled.ScrollView`
  width: ${getColumnWidth(21, false)}px;
  margin-left: ${getColumnWidth(3, false)}px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TopContainersBorne = styled.View`
  display: flex;
  flex-direction: row;
  padding: 3px;
`;

export const TopContainersMobile = styled.View`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

const generalPlusContainer = `
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  z-index: 0;
  overflow: hidden;
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
      ? `${getColumnWidth(columnWidth, false)}px`
      : `${getColumnWidth(grid.columns / 2, false)}px`};
  ${({ height }) => height && `height: ${height}px`};
  padding: ${({ paddingTop, paddingBottom, paddingX }) =>
    `${paddingTop !== undefined ? paddingTop : 40}px ${
      paddingX !== undefined ? paddingX : 48
    }px ${paddingBottom !== undefined ? paddingBottom : 40}px ${
      paddingX !== undefined ? paddingX : 40
    }px`};
  margin-right: ${getColumnWidth(1, false)}px;
  margin-bottom: ${({ marginBottom }) => getMarginBottom(32, marginBottom)};
`;

export const PlusContainersMobile = styled.View<PlusContainersProps>`
  ${generalPlusContainer}
  ${({ border }) => getBorderPlusContainer(border)};
  width: 100%;
  padding: ${({ paddingY, paddingX }) =>
    `${paddingY !== undefined ? paddingY : 24}px ${
      paddingX !== undefined ? paddingX : getColumnWidth(1, true)
    }px`};
  margin-bottom: ${({ marginBottom }) => getMarginBottom(24, marginBottom)};
`;

export const TextPlusWrapper = styled.Pressable<TextPlusWrapperProps>`
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`;

export const PagePlusBorneIllustrationWrapper = styled.View`
  position: absolute;
  right: ${getColumnWidth(1, false)}px;
  top: 45%;
`;
