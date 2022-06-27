import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

export const FiltersWrapper = styled.ScrollView`
  width: ${getColumnWidth(13, false)};
  padding: 32px 32px 7px;
  border-radius: ${theme?.shape?.radius?.input}px;
  background-color: ${theme?.color?.primary?.white};
  position: absolute;
  right: 0;
  top: ${theme?.size?.bornContent?.topBarHeight + 8}px;
`;

export const Content = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CheckboxWrapper = styled.View`
  width: 40%;
  margin-bottom: 25px;
`;
