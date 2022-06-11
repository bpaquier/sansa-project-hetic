import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, shape } = theme;

export const TopBarWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: ${getColumnWidth(21, false)};
  background-color: ${color.primary.white};
  border-radius: ${shape?.radius?.input}px;
  padding: 13px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.View`
  flex: 1 1;
  flex-direction: row;
  margin-right: 24px;
  align-items: center;
  overflow: visible;
`;

export const Input = styled.TextInput`
  flex: 1 1;
  border-radius: ${shape?.radius?.button};
  border: 1px solid ${color?.neutral?.black20};
  height: 54px;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  width: 63%;
  max-width: 1100px;
  justify-content: space-between;
  margin-left: 24px;
`;

export const IconWrapper = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Label = styled.View`
  margin-top: 10px;
`;
