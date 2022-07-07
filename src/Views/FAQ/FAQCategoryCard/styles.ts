import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, shape } = theme;

export const CategoriesCard = styled.TouchableOpacity`
  width: ${getColumnWidth(11, true)};
  height: ${getColumnWidth(11, true)};
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
