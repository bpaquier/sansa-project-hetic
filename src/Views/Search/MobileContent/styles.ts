import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: ${theme?.sizes?.navigation?.mobileHeight}px;
  width: 100%;
  padding: 12.5px ${theme?.grid?.mobileGutter}px;
`;

export const Content = styled.View`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
