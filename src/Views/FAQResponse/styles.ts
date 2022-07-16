import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { color, grid } = theme;

export const GlobalWrapperMobile = styled.View`
  padding: 0px ${grid.mobileGutter}px;
`;

export const GlobalWrapperBorne = styled.View`
  padding: 0px;
`;

export const QuestionsWrapper = styled.View`
  background-color: ${color.primary.blueExtraLight};
  padding: 24px;
  width: 100%;
`;

export const PageWrapper = styled.ScrollView`
  width: 100%;
  margin-bottom: 50px;
`;
