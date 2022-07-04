import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

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
  background-color: ${({ isActive }) => (isActive ? "#F3F3F3" : "transparent")};
`;
