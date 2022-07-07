import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const FAQQuestionTexts = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const QuestionsContainer = styled.TouchableOpacity<{
  isShadow?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: ${({ isShadow }) => (isShadow ? 24 : 0)}px;
  border-radius: ${theme.shape.radius.input}px;
  background-color: ${({ isShadow }) =>
    isShadow ? theme.color.primary.white : "transparent"};
  margin: ${({ isShadow }) => (isShadow ? 2 : 0)}px;
  margin-bottom: ${({ isShadow }) => (isShadow ? 16 : 0)}px;
`;

export const GeneralContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
