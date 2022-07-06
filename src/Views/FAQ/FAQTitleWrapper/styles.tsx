import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { color, grid } = theme;

export const FAQTitleWrapperView = styled.View`
  margin-top: 16px;
  background-color: ${color.primary.blue};
  width: 100%;
  padding: 24px ${grid.mobileGutter}px;
`;
