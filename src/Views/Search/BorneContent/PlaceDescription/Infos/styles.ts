import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const InfosWrapper = styled.View`
  width: 47%;
  background-color: ${theme?.color?.primary?.blueExtraLight};
  border-radius: ${theme?.shape?.radius?.input}px;
  overflow: hidden;
  height: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.ScrollView`
  flex: 1 1;
`;

export const InfosContent = styled.View`
  background-color: ${theme?.color?.neutral?.black5};
  border-radius: ${theme?.shape?.radius?.input}px;
  padding: 32px;
`;

export const InfoItem = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const LastInfoItem = styled.View`
  width: 90%;
  flex-direction: row;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;
