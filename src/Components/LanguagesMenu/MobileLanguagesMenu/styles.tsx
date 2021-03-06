import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

export const TitleWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const MenuMobile = styled.View`
  width: ${getColumnWidth(24, true)}px;
  margin-top: 24px;
  border-radius: 12px;
  background-color: ${theme.color.primary.white};
`;

export const WrapperMobileMenu = styled.View`
  position: absolute;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  background-color: ${theme.color.neutral.black5};
`;
