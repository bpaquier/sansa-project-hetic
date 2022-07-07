import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color } = theme;

export const WarningTextContainer = styled.View`
  background-color: ${color.semantic.warning};
  width: ${getColumnWidth(24, true)}px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid ${color.semantic.warningBorder};
  border-radius: 8px;
`;
