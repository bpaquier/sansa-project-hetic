import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { grid, color } = theme;

export const PageContainerMobile = styled.ScrollView`
  margin-bottom: 170px;
  background-color: ${color.primary.white};
`;

export const FAQSectionsContainers = styled.View`
  padding: 0px ${grid.mobileGutter}px;
`;

export const FrequentQuestionContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FrequentQuestionTexts = styled.View`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
`;

export const FrequentQuestionCategoryWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Texttest = styled.View`
  background-color: ${color.semantic.warning};
  border: 1px solid yellow;
  width: ${getColumnWidth(24, true)};
`;

export const WarningText = styled.View`
  background-color: ${color.primary.yellow};
  width: ${getColumnWidth(24, true)};
  border: 1px solid red;
  padding: 10px;
`;
