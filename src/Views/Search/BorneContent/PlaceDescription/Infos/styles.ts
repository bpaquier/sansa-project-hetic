import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const InfosWrapper = styled.View`
  width: 47%;
  background-color: ${theme?.color?.neutral?.black5};
  border-radius: ${theme?.shape?.radius?.input}px;
  padding: 32px;
`;

export const InfoItem = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const LastInfoItem = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
`;
