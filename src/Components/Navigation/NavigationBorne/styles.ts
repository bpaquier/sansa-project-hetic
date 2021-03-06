import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

const { shape, grid } = Theme;

export const Nav = styled.Pressable`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: ${grid.borneGutter}px;
  top: ${grid.borneGutter}px;
  padding: 20px 0;
  border-radius: ${shape?.radius?.input}px;
  border: 1px solid ${Theme.color.neutral.black10};
  width: ${getColumnWidth(2, false)}px;
  left: ${grid.borneGutter}px;
  background-color: ${Theme.color.primary.white};
  z-index: 100;
`;

export const NavButtonsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

interface NavButtonContainerProps {
  active?: boolean;
  spaceTop?: boolean;
}

export const NavButtonContainer = styled.View<NavButtonContainerProps>`
  padding: 4px;
  border-radius: 500px;
  border: 2px solid ${Theme.color.primary.white};

  ${({ active }) =>
    active && `border-color: ${Theme.color.primary.blueExtraDark};`};
  ${({ spaceTop }) => spaceTop && `margin-top: 28px;`};
`;

interface NavButtonProps {
  active?: boolean;
}

export const NavButton = styled.TouchableOpacity<NavButtonProps>`
  width: ${getColumnWidth(1.3, false)}px;
  height: ${getColumnWidth(1.3, false)}px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background-color: ${Theme.color.primary.blue};

  ${({ active }) =>
    active && `background-color: ${Theme.color.primary.blueExtraDark};`};
`;

export const LanguageSection = styled.View`
  display: flex;
  padding: 20px;
  padding-bottom: 0;
  width: 100%;
  align-items: center;
`;
