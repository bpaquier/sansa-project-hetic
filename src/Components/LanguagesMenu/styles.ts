import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

export interface LanguagesItemMenuProps extends TouchableOpacityProps {
  isActive: boolean;
}

export const LanguagesItemMenu = styled.TouchableOpacity<LanguagesItemMenuProps>`
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;
  border-radius: 10px;
  background-color: ${({ isActive }) =>
    isActive ? theme.color.neutral.white60 : "transparent"};
`;

export const TextContainerLanguages = styled.View`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
