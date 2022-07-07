import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color } = theme;

export const TipTextContainer = styled.View`
  width: ${getColumnWidth(22, true)};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const TipDecoration = styled.View`
  height: 100%;
  width: 10px;
  background-color: ${color.semantic.success};
  margin-right: 16px;
`;
