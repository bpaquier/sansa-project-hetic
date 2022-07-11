import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, shape } = theme;

export const CategoriesCardMobile = styled.TouchableOpacity`
  width: ${getColumnWidth(11, true)}px;
  height: ${getColumnWidth(11, true)}px;
  background-color: ${color.primary.white};
  border-radius: ${shape.radius.input}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const CategoriesCardBorne = styled.TouchableOpacity`
  width: ${getColumnWidth(4, false)}px;
  display: flex;
  background-color: ${color.primary.white};
  border-radius: ${shape.radius.input}px;
  margin-bottom: 16px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
