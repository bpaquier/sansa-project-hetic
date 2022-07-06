import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";

export const FAQQuestionTexts = styled.View`
  width: ${getColumnWidth(22, true)};
`;

export const QuestionsContainer = styled.Pressable`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GeneralContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
