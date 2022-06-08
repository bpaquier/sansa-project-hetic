import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

type TitleWrapperProps = {
  marginBottom: number;
};

const { boxShadow, color, shape } = Theme;

export const PageWrapper = styled.View`
  width: 100%;
`;

export const PageWrapperBorne = styled.View`
  width: 100%;
  height: 100%;
`;

export const PageContent = styled.View`
  flex-direction: column;
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
