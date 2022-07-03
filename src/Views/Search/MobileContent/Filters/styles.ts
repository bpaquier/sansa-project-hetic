import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface TagsProps {
  bgColor?: string;
  borderColor?: string;
  firstElement?: boolean;
  lastElement?: boolean;
}

export const FiltersWrapper = styled.View`
  width: 100%;
  overflow: visible;
`;

export const InputWrapper = styled.View``;

export const SearchIconWrapper = styled.View`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const Input = styled.TextInput`
  width: ${getColumnWidth(theme?.grid?.columns, true)};
  border-radius: ${theme?.shape?.radius?.button};
  height: 40px;
  background-color: ${theme?.color?.primary?.white};
  padding-left: 40px;
`;

export const FiltersSlider = styled.ScrollView`
  width: ${Dimensions.get("screen").width}px;
  padding: 10px 0;
  left: ${-1 * theme?.grid?.mobileGutter}px;
`;

export const Tag = styled.TouchableOpacity`
  border-radius: ${theme?.shape?.radius?.button};
  background-color: ${({ bgColor }: TagsProps) =>
    bgColor ? bgColor : theme?.color?.primary?.white};
  height: 35px;
  padding: 0 12px;
  flex-direction: row;
  align-items: center;
  border: ${({ borderColor }: TagsProps) =>
    `1px solid ${
      borderColor ? borderColor : theme?.color?.primary?.blueExtraDark
    }`};
  margin-left: ${({ firstElement }: TagsProps) =>
    firstElement ? `${theme?.grid?.mobileGutter}px` : "0"};
  margin-right: ${({ lastElement }: TagsProps) =>
    lastElement ? `${theme?.grid?.mobileGutter}px` : "12px"};
`;

export const TagIcon = styled.View`
  margin-right: 12px;
`;
