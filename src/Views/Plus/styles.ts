import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

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
  height?: string;
  paddingY?: number;
};

const { color, shape, sizes, grid } = theme;

export const PageWrapperMobile = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PageWrapperBigBorne = styled.View`
  width: ${getColumnWidth(21, false)}px;
  margin-left: ${getColumnWidth(3, false)}px;
  display: flex;
  flex-direction: column;
  height: ${Dimensions.get("window").height - grid.borneGutter * 2}px;
  justify-content: space-between;
`;

export const PageWrapperSmallBorne = styled.ScrollView`
  width: ${getColumnWidth(21, false)}px;
  margin-left: ${getColumnWidth(3, false)}px;
`;

export const TopContainersBorne = styled.View<{ isFlex?: boolean }>`
  display: flex;
  flex-direction: row;
  flex: ${({ isFlex }) => (isFlex ? 2 : 1)};
`;

export const TopContainersMobile = styled.View``;

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
  margin-bottom: ${({ marginBottom }) => getMarginBottom(16, marginBottom)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
