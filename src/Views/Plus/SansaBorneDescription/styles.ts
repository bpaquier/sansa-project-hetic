import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

type TextMissionsPlusWrapperProps = {
  marginTop?: number;
};

export const TextMissionsPlusWrapper = styled.Pressable<TextMissionsPlusWrapperProps>`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${getColumnWidth(7, false)};
`;

export const LogoWrappers = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 100px;
  background-color: ${theme.color.primary.yellow};
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
