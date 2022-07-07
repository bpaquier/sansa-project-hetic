import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { color } = theme;

export const QuestionCategoryWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const QuestionCategoryDecoration = styled.View`
  width: 10px;
  height: 2px;
  margin-right: 8px;
  background-color: ${color.primary.yellow};
`;
