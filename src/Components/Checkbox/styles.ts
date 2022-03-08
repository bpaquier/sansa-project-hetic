import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

type StyledBoxProps = {
  checked: boolean;
  disabled?: boolean;
};

export const StyledView = styled.Pressable`
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const StyledBox = styled.Pressable<StyledBoxProps>`
  height: 16px;
  width: 16px;
  border-radius: ${theme.shape.borderRadius(1)};
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

export const StyledLabel = styled.Text`
  align-self: center;
  justify-self: center;
  padding-bottom: 2px;
  margin-left: ${theme.spacing(1)};
`;
