import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export const Wrapper = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme?.color?.primary?.white};
`;

export const Header = styled.View`
  height: 38px;
  overflow: visible;
  justify-content: center;
  box-shadow: ${theme?.boxShadow?.panel};
  padding: 0 ${theme?.grid?.mobileGutter}px;
`;

export const Content = styled.ScrollView`
  flex: 1 1;
  width: 100%;
  padding: ${theme?.grid?.mobileGutter}px ${theme?.grid?.mobileGutter}px;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 16px;
`;

export const Item = styled.View`
  margin-bottom: 32px;
`;

export const ItemTitleWrapper = styled.View`
  margin-bottom: 24px;
`;

export const InfosWrapper = styled.View`
  padding: 16px;
  border-radius: ${theme?.shape?.radius?.card}px;
  background-color: ${theme?.color?.neutral?.black10};
`;

export const InfoItem = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  width: 90%;
`;

export const TextWrapper = styled.View`
  justify-content: center;
`;

export const IconWrapper = styled.View`
  margin-right: 12px;
`;

export const HoursContentWrapper = styled.View`
  flex-direction: row;
`;

export const HoursItemsWrapper = styled.View``;

export const Day = styled.View`
  margin-right: 24px;
`;

export const HoursItem = styled.View`
  margin-bottom: 8px;
`;

export const Service = styled.View`
  margin-bottom: 8px;
`;

export const LastItem = styled.View`
  margin-bottom: 100px;
`;
