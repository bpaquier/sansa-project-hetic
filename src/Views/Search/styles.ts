import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

interface MobileProps {
  statusBarHeight?: number;
}

export const StyledView = styled.View``;

export const MobileWrapper = styled.View`
  position: absolute;
  top: ${({ statusBarHeight }: MobileProps) =>
    statusBarHeight ? `${statusBarHeight}px` : 0};
  left: 0;
  bottom: ${theme?.sizes?.navigation?.mobileHeight}px;
  width: 100%;
`;
