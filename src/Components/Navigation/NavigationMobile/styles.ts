import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";

export const Nav = styled.Pressable`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px 0;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${Theme.color.primary.white};
  box-shadow: ${Theme.boxShadow.panel};
`;

interface NavButtonProps {
  primary?: boolean;
}

export const NavButton = styled.TouchableOpacity<NavButtonProps>`
  flex: 1;
  align-items: center;

  ${({ primary }: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    primary &&
    `
    margin-top: -16px;
  `};
`;

interface PrimaryIconContainerProps {
  active?: boolean;
}

export const PrimaryIconContainer = styled.View<PrimaryIconContainerProps>`
  position: relative;
  top: -8px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  padding: 8px;
  border: 2px solid ${Theme.color.neutral.black60};
  background-color: ${Theme.color.primary.white};

  ${({ active }: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    active &&
    `
    border-color: ${Theme.color.primary.white};
    background-color: ${Theme.color.primary.blue};
  `}
`;

interface NavButtonTextProps {
  active?: boolean;
}

export const NavButtonText = styled.Text<NavButtonTextProps>`
  margin-top: 4px;
  font-size: 16px;
  color: ${Theme.color.neutral.black60};

  ${({ active }: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    active &&
    `
    font-weight: bold;
    color: ${Theme.color.primary.blue};
  `}
`;
