import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

export const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: ${Dimensions?.get("window").width}px;
  align-items: center;
`;

export const AlternativeCard = styled.View`
  width: ${getColumnWidth(theme?.grid?.columns, true)};
  height: 110px;
  background-color: ${theme?.color?.primary?.white};
  justify-content: center;
  align-items: center;
  border-radius: ${theme?.shape?.radius?.checkbox}px;
  margin-bottom: 18px;
`;

export const CarouselWrapper = styled.View`
  margin-bottom: 18px;
`;

export const Logo = styled.View`
  margin-bottom: 8px;
`;

export const PositionIconWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 100%;
  right: ${theme?.grid?.mobileGutter}px;
  margin-bottom: ${theme?.grid?.mobileGutter}px;
`;
