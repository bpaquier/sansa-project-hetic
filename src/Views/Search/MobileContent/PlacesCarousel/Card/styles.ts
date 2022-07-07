import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const CardWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding: 13px 10px;
  background-color: ${theme?.color?.primary?.white};
  border-radius: ${theme?.shape?.radius?.checkbox}px;
`;

export const CardContent = styled.TouchableOpacity``;

export const Item = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IndexWrapper = styled.View`
  height: 24px;
  width: 24px;
  background-color: ${theme?.color?.primary?.blueExtraDark};
  border-radius: ${theme?.shape?.radius?.checkbox}px;
  align-items: center;
  margin-right: 8px;
`;
