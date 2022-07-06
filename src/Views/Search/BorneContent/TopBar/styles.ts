import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color, shape, sizes, grid } = theme;

interface UnderlineIndicatorProps {
  bgColor?: string;
  width?: number;
}

export const TopBarWrapper = styled.View`
  position: absolute;
  top: ${grid.borneGutter}px;
  right: ${grid.borneGutter}px;
  width: ${getColumnWidth(21, false)}px;
  height: ${sizes?.bornContent?.topBarHeight}px;
  background-color: ${color.primary.white};
  border-radius: ${shape?.radius?.input}px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;

export const InputWrapper = styled.View`
  width: ${getColumnWidth(7, false)}px;
  flex-direction: row;
  margin-right: 24px;
  align-items: center;
  overflow: visible;
`;

export const SearchIconWrapper = styled.View`
  position: absolute;
  top: 19px;
  left: 20px;
`;

export const Input = styled.TextInput`
  flex: 1 1;
  border-radius: ${shape?.radius?.button};
  border: 1px solid ${color?.neutral?.black20};
  height: 54px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px 0 50px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  width: ${getColumnWidth(12, false)}px;
  justify-content: space-between;
  margin-left: 24px;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  height: ${sizes?.bornContent?.topBarHeight}px;
`;

export const Button = styled.Pressable`
  position: relative;
`;

export const Label = styled.View`
  margin-top: 10px;
`;

export const UnderlineIndicator = styled.View`
  position: absolute;
  width: ${({ width }: UnderlineIndicatorProps) =>
    width ? `${width}px` : "100%"};
  height: 8px;
  background-color: ${({ bgColor }: UnderlineIndicatorProps) =>
    bgColor ? bgColor : color?.neutral?.black20};
  bottom: -16px;
  border-bottom-left-radius: ${shape?.radius?.checkbox}px;
  border-bottom-right-radius: ${shape?.radius?.checkbox}px;
`;

export const RoundedIndicator = styled.View`
  position: absolute;
  width: ${({ width }: UnderlineIndicatorProps) => `${width + 8}px`};
  height: ${({ width }: UnderlineIndicatorProps) => `${width + 8}px`};
  top: -4px;
  left: -4px;
  border-radius: 50px;
  border: 2px solid ${color?.primary?.blueExtraDark};
`;
