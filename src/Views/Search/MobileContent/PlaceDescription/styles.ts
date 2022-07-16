import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

interface WrapperProps {
  statusBarHeight?: number;
}

export const Wrapper = styled.View`
  position: absolute;
  right: 0;
  top: ${({ statusBarHeight }: WrapperProps) =>
    statusBarHeight ? `${-1 * statusBarHeight}px` : "0"};
  left: 0;
  bottom: 0;
  padding-top: ${({ statusBarHeight }: WrapperProps) =>
    statusBarHeight ? `${statusBarHeight}px` : "0"};
  background-color: ${theme?.color?.primary?.white};
`;

export const Header = styled.View`
  overflow: visible;
  justify-content: center;
  box-shadow: ${theme?.boxShadow?.panel};
`;

export const ArrowWrapper = styled.View`
  padding: 12px ${theme?.grid?.mobileGutter}px;
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
  background-color: ${theme?.color?.primary?.blueExtraLight};
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

export const LoadingOverlay = styled.View`
  position: absolute;
  right: 0;
  height: 200px;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
  border-radius: ${theme?.shape?.radius?.input}px;
  z-index: 2;
`;
