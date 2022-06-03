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

const borderCheckboxColor = ({
  checked,
  disabled
}: {
  checked: boolean;
  disabled?: boolean;
}) => {
  if (disabled) return theme.color.neutral.black10;
  if (checked) return theme.color.primary.blue;
  return theme.color.neutral.black20;
};

const backgroundCheckboxColor = ({
  checked,
  disabled
}: {
  checked: boolean;
  disabled?: boolean;
}) => {
  if (disabled) return theme.color.neutral.black10;
  if (checked) return theme.color.primary.blue;
  return theme.color.primary.white;
};

export const CheckboxMobile = styled.Pressable<StyledBoxProps>`
  height: 16px;
  width: 16px;
  border-radius: ${theme.shape.radius.checkbox}px;
  border: 1px solid
    ${({ checked, disabled }) => borderCheckboxColor({ checked, disabled })};
  background-color: ${({ checked, disabled }) =>
    backgroundCheckboxColor({ checked, disabled })};
`;

export const CheckboxBorne = styled.Pressable<StyledBoxProps>`
  height: 24px;
  width: 24px;
  border-radius: ${theme.shape.radius.checkbox}px;
  border: 1px solid
    ${({ checked, disabled }) => borderCheckboxColor({ checked, disabled })};
  background-color: ${({ checked, disabled }) =>
    backgroundCheckboxColor({ checked, disabled })};
`;

export const TextContainer = styled.View`
  align-self: center;
  margin-left: 8px;
`;

export const CheckContainerMobile = styled.View`
  position: absolute;
  top: -5px;
  left: -1px;
`;

export const CheckContainerBorne = styled.View`
  position: absolute;
  top: -2px;
  left: -1px;
`;
