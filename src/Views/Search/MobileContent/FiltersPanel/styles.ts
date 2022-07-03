import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const PanelContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px ${theme?.grid?.mobileGutter}px 0;
`;

export const Filters = styled.ScrollView`
  flex: 1 1;
`;

export const BottomButton = styled.TouchableOpacity`
  padding: 20px 0;
  align-items: center;
`;
