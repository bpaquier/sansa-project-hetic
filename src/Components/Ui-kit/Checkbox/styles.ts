import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

type StyledBoxProps = {
  checked: boolean;
  disabled?: boolean;
};

export const StyledView = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const StyledBox = styled.Pressable<StyledBoxProps>`
  height: 16px;
  width: 16px;
  border-radius: ${theme.shape.radius.checkbox}px;
  border: 1px solid
    ${({ checked, disabled }) => {
      if (disabled) return theme.color.neutral.black5;
      if (checked) return theme.color.primary.blue;
      return theme.color.neutral.black20;
    }};
  background-color: ${({ checked, disabled }) => {
    if (disabled) return theme.color.neutral.black5;
    if (checked) return theme.color.primary.blue;
    return theme.color.primary.white;
  }};
`;

export const StyledTextContainer = styled.View`
  align-self: center;
  margin-top: 3px;
  margin-left: 8px;
`;

export const StyledCheckContainer = styled.View`
  position: absolute;
  top: -5px;
  left: -1px;
`;
