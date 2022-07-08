import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color } = theme;

type WarningTextContainerProps = {
  isMobile?: boolean;
};

export const WarningTextContainer = styled.View<WarningTextContainerProps>`
  background-color: ${color.semantic.warning};
  width: ${({ isMobile }) =>
    isMobile ? `${getColumnWidth(24, true)}px` : "100%"};
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid ${color.semantic.warningBorder};
  border-radius: 8px;
`;
