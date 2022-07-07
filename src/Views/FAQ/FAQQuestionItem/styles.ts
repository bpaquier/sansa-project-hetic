import styled from "styled-components/native";
import { getColumnWidth } from "~/Styles/mixins.styles";

export const FAQQuestionTexts = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const QuestionsContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
`;

export const GeneralContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
