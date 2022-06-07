import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

const { shape } = Theme;

export const Nav = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 10px;
  padding: 20px 0;
  border-radius: ${shape?.radius?.input}px;
  border: 1px solid ${Theme.color.neutral.black10};
  width: ${getColumnWidth(2, false)};
  left: 10px;
  background-color: ${Theme.color.primary.white};
`;

interface NavButtonContainerProps {
  active?: boolean;
}

export const NavButtonContainer = styled.View<NavButtonContainerProps>`
  padding: 4px;
  border-radius: 500px;
  border: 2px solid ${Theme.color.primary.white};

  ${({ active }: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    active &&
    `
    border-color: ${Theme.color.primary.blueExtraDark};
  `};
`;

interface NavButtonProps {
  active?: boolean;
}

export const NavButton = styled.TouchableOpacity<NavButtonProps>`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background-color: ${Theme.color.primary.blue};

  ${({ active }: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    active &&
    `
    background-color: ${Theme.color.primary.blueExtraDark};
  `};
`;
