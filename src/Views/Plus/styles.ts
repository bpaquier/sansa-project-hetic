import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

type TitleWrapperProps = {
  marginBottom: number;
};

type PlusContainersProps = {
  marginBottom?: boolean;
  border?: boolean;
  columnWidth?: number;
  paddingTop?: number;
  paddingX?: number;
  paddingBottom?: number;
  adminHelp?: boolean;
  alignSelf?: "stretch" | "flex-start";
};

type TextPlusWrapperProps = {
  marginTop?: number;
};

const { boxShadow, color, shape, sizes, grid } = Theme;

export const PageWrapper = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
  display: flex;
  flex-direction: column;
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
`;

export const TitleWrapper = styled.View<TitleWrapperProps>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const PlusContainersBorne = styled.View<PlusContainersProps>`
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${boxShadow.panel};
  padding: ${({ paddingTop, paddingBottom, paddingX }) =>
    `${paddingTop ?? 40}px ${paddingX ?? 48}px ${paddingBottom ?? 40}px ${
      paddingX ?? 40
    }px`};
  margin-right: ${getColumnWidth(1, false)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? 48 : 0)}px;
  ${({ border }) => border && `border: 1px solid ${color.primary.blueDark}`};
  width: ${({ columnWidth }) =>
    columnWidth
      ? getColumnWidth(columnWidth, false)
      : getColumnWidth(grid.columns / 2, false)};
`;

export const PlusContainersMobile = styled.View<PlusContainersProps>`
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${boxShadow.panel};
  padding: 24px ${getColumnWidth(1, true)};
  width: 100%;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? 24 : 0)}px;
  ${({ border }) => border && `border: 1px solid ${color.primary.blueDark}`};
`;

export const LogoWrappers = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 100px;
  background-color: ${Theme.color.primary.yellow};
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainerMobile = styled.View`
  margin-top: 40px;
`;

export const ButtonsContainerBorne = styled.View`
  margin-top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 184px;
  margin-top: 24px;
`;

export const TextPlusWrapper = styled.Pressable<TextPlusWrapperProps>`
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`;

export const TextMissionsPlusWrapper = styled.Pressable<TextPlusWrapperProps>`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${getColumnWidth(7, false)};
`;

export const PagePlusBorneIllustrationWrapper = styled.View`
  position: absolute;
  right: 0;
  bottom: -90px;
`;

export const ButtonWrapperBorne = styled.View`
  margin-left: 16px;
`;

export const ButtonWrapperMobile = styled.View`
  width: 100%;
`;

export const ConnectedIllustrationsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const ConnectedIllustrationWrapper = styled.View`
  width: ${getColumnWidth(3, false)};
  border: 1px solid ${color.neutral.black5};
  border-radius: ${shape.radius.input}px;
  justify-content: space-between;
  align-content: space-between;
`;
