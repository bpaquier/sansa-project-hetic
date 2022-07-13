import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

type FAQSectionContainersProps = {
  isMobile?: boolean;
  row?: boolean;
  fillHeight?: boolean;
};

const { grid, color, shape } = theme;

export const PageContainerMobile = styled.ScrollView`
  margin-bottom: 170px;
  background-color: ${color.primary.white};
`;

export const PageContainerBorne = styled.View`
  width: ${getColumnWidth(21, false)}px;
  margin-left: ${getColumnWidth(3, false)}px;
  background-color: ${color.primary.white};
  border-radius: ${shape.radius.input}px;
  height: 100%;
  border: 1px solid ${color.neutral.black5};
  padding: 45px ${getColumnWidth(1, false)}px;
`;

export const FAQSectionsContainers = styled.View<FAQSectionContainersProps>`
  padding: 0px ${({ isMobile }) => (isMobile ? grid.mobileGutter : "0")}px;
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: space-between;
  ${({ row }) => row && `flex: 1`};
  ${({ fillHeight }) => fillHeight && `flex: 1`};
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

export const ColumnsContainersBorne = styled.View`
  width: ${getColumnWidth(8.5, false)}px;
  height: 100%;
`;

export const ColumnsContainersMobile = styled.View`
  width: 100%;
`;

export const FAQQuestionsContainer = styled.ScrollView<FAQSectionContainersProps>`
  display: flex;
  flex: 1;
  width: ${({ isMobile }) =>
    isMobile ? "100%" : `${getColumnWidth(6, false)}px`};
  ${({ isMobile }) => !isMobile && `max-width: 100%`};
  padding-bottom: ${({ isMobile }) => (isMobile ? 0 : 16)}px;
`;
