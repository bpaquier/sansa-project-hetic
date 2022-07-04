import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { grid, color } = theme;

export const Breadcrumb = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.View`
  margin-top: 16px;
  background-color: ${color.primary.blue};
  width: 100%;
  padding: 24px ${grid.mobileGutter}px;
`;

export const PageContainerMobile = styled.ScrollView`
  margin-bottom: 300px;
  background-color: ${color.primary.white};
`;

export const SectionsContainers = styled.View`
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

export const FrequentQuestionCategoryDecoration = styled.View`
  width: 10px;
  height: 2px;
  margin-right: 8px;
  background-color: ${color.primary.yellow};
`;
