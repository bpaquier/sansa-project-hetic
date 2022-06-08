import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

type TitleWrapperProps = {
  marginBottom: number;
};

const { boxShadow, color, shape, sizes } = Theme;

export const PageWrapper = styled.View`
  width: 100%;
  margin-bottom: ${sizes?.mobilePageMarginBottom}px;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
`;

export const TitleWrapper = styled.View<TitleWrapperProps>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const SansaDescriptionContainer = styled.View`
  width: 100%;
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${Theme.boxShadow.panel};
  padding: ${getColumnWidth(1, true)};
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const AdministrativeHelpContainer = styled.View`
  width: 100%;
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${Theme.boxShadow.panel};
  border: 1px solid ${color.primary.blueDark};
  margin-bottom: 24px;
  padding: ${getColumnWidth(1, true)};
`;

export const PlusContainer = styled.View`
  width: 100%;
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${Theme.boxShadow.panel};
  padding: ${getColumnWidth(1, true)};
  padding-top: 16px;
`;

export const SansaDescriptionTitleWrapper = styled.View`
  width: 100%;
  border-radius: ${shape.radius.input}px;
  background-color: ${color.primary.white};
  box-shadow: ${boxShadow.panel};
  padding: ${getColumnWidth(1, true)};
`;

export const ButtonsContainerMobile = styled.View`
  margin-top: 40px;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 184px;
  margin-top: 24px;
`;
