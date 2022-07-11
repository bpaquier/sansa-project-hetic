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

export const MenuBorne = styled.View`
  position: absolute;
  left: ${getColumnWidth(3, false)}px;
  bottom: ${theme.grid.borneGutter}px;
  background-color: ${theme.color.primary.white};
  width: ${getColumnWidth(4, false)}px;
  border-radius: 10px;
`;
