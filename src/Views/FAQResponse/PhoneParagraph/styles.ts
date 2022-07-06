import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color } = theme;

export const PhoneTextContainer = styled.View`
  width: ${getColumnWidth(24, true)};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const PhoneDecoration = styled.View`
  height: 72px;
  width: 10px;
  background-color: ${color.primary.blueLight};
  margin-right: 16px;
`;
