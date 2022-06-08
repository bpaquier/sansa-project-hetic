import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

type TitleWrapperProps = {
  marginBottom: number;
};
type PlusContainersProps = {
  marginBottom?: boolean;
  border?: boolean;
  paddingTop?: boolean;
};
const { boxShadow, color, shape, sizes } = Theme;

export const PageWrapper = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
  display: flex;
  flex-direction: column;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
`;

export const TitleWrapper = styled.View<TitleWrapperProps>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const PlusContainers = styled.View<PlusContainersProps>`
  width: 100%;
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${boxShadow.panel};
  padding: ${getColumnWidth(1, true)};
  ${({ border }) => border && `border: 1px solid ${color.primary.blueDark}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: 24px`};
  ${({ paddingTop }) => paddingTop && `padding-top: 24px`};
`;

export const ButtonsContainerMobile = styled.View`
  margin-top: 40px;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 184px;
  margin-top: 24px;
`;

export const TextPlusWrapper = styled.View`
  margin-top: 24px;
`;
