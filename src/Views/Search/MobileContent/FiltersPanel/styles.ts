import { Dimensions } from "react-native";
import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

interface OverlayProps {
  statusBarHeight?: number;
}

export const PanelContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 24px ${theme?.grid?.mobileGutter}px 0;
  overflow: hidden;
`;

export const LoadingOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${Dimensions?.get("window")?.width}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-top-left-radius: ${theme?.shape?.radius?.button};
  border-top-right-radius: ${theme?.shape?.radius?.button};
`;

export const Filters = styled.ScrollView`
  flex: 1 1;
`;

export const BottomButton = styled.TouchableOpacity`
  padding: 06px 0;
  align-items: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: ${({ statusBarHeight }: OverlayProps) =>
    statusBarHeight ? `${-1 * statusBarHeight}px` : 0};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
