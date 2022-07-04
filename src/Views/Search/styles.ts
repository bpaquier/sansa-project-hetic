import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const StyledView = styled.View``;

export const MobileWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: ${theme?.sizes?.navigation?.mobileHeight + 10}px;
  width: 100%;
  padding: 12.5px ${theme?.grid?.mobileGutter}px;
`;
