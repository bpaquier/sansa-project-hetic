import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";

type WrapperProps = {
  isMobile?: boolean;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  width: 100%;
  height: 100%;
  padding: ${({ isMobile }) => (isMobile ? 0 : 24)}px
    ${getColumnWidth(1, true)}px;
`;

export const FlashlightIllustrationWrapper = styled.View<WrapperProps>`
  width: 100%;
  height: 184px;
  margin-top: 24px;
  position: absolute;
  bottom: ${({ isMobile }) => (isMobile ? -20 : -10)}px;
  left: -10px;
`;
