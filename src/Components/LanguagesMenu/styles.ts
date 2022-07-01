import { Dimensions, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

export interface LanguagesItemMenuProps extends TouchableOpacityProps {
  isActive: boolean;
}

export const BackgroundLayer = styled.Pressable`
  position: absolute;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const Menu = styled.View`
  position: absolute;
  left: ${getColumnWidth(3, false)};
  bottom: ${theme.grid.borneGutter}px;
  background-color: ${theme.color.primary.white};
  width: ${getColumnWidth(4, false)};
  border-radius: 10px;
`;

export const LanguagesItemMenu = styled.TouchableOpacity<LanguagesItemMenuProps>`
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? "#F3F3F3" : "transparent")};
`;
