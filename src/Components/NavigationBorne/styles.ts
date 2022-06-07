import styled from "styled-components/native";
import Theme from "~/Styles/theme.styles";

const { sizes, shape } = Theme;

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
  width: ${sizes?.navBorneWidth}px;
  left: 10px;
  background-color: ${Theme.color.primary.white};
`;

interface NavButtonContainerProps {
  active?: Boolean;
}

export const NavButtonContainer = styled.View<NavButtonContainerProps>`
  padding: 4px;
  border-radius: 500px;
  border: 2px solid ${Theme.color.primary.white};

  ${({ active }: any) => active && `
    border-color: ${Theme.color.primary.blueExtraDark};
  `};  
`

interface NavButtonProps {
  active?: Boolean;
}

export const NavButton = styled.TouchableOpacity<NavButtonProps>`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background-color: ${Theme.color.primary.blue};

  ${({ active }: any) => active && `
    background-color: ${Theme.color.primary.blueExtraDark};
  `};
`;
