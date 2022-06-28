import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

export const FiltersWrapper = styled.ScrollView`
  width: ${getColumnWidth(13, false)};
  padding: 32px 64px;
  border-radius: ${theme?.shape?.radius?.input}px;
  background-color: ${theme?.color?.primary?.white};
  position: absolute;
  right: 0;
  top: ${theme?.size?.bornContent?.topBarHeight + 8}px;
  z-index: 1;
`;

export const Title = styled.View`
  margin-bottom: 24px;
`;

export const Content = styled.View`
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxWrapper = styled.View`
  width: 45%;
  margin-bottom: 25px;
`;
