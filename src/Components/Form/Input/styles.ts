import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";
const { color, shape } = Theme;

interface InputStyleProps {
  error?: boolean;
}

export const InputWrapper = styled.View`
  margin-top: 16px;
`;

export const InputElement = styled.TextInput`
  width: 100%;
  border: 1px solid;
  border-color: ${({ error }: InputStyleProps) =>
    error ? color?.semantic?.dangerText : color?.neutral?.black20};
  border-radius: ${shape?.radius?.input}px;
  padding: 8px 16px;
  background-color: ${color?.primary?.white};
  margin: 10px 0 5px;
`;

export const Select = styled.View`
  width: 100%;
  border: 1px solid;
  border-color: ${color?.neutral?.black20};
  overflow: hidden;
  border-radius: ${shape?.radius?.input}px;
  padding: 0 16px;
  background-color: ${color?.primary?.white};
  margin: 10px 0 5px;
`;
