import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface TagProps {
  bgColor?: string;
  borderColor?: string;
  marginBottom?: number;
}

export const TagsWrapper = styled.View`
  position: absolute;
  bottom: ${theme?.grid?.borneGutter}px;
  left: ${theme?.grid?.borneGutter * 2 + getColumnWidth(2, false)}px;
  right: ${theme?.grid?.borneGutter + getColumnWidth(2, false)}px;
  flex-direction: row;
  align-items: flex-end;
  z-index: 200;
`;

export const Tag = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: ${theme?.sizes?.bornContent?.tagsHeight}px;
  background-color: ${({ bgColor }: TagProps) =>
    bgColor ? bgColor : theme?.color?.primary?.white};
  margin-right: 8px;
  border-radius: ${theme?.shape?.radius?.button};
  border: ${({ borderColor }: TagProps) =>
    borderColor ? `2px solid ${borderColor}` : "none"};
  flex-grow: 0;
  margin-top: 8px;
`;

export const TagListContainer = styled.View`
  flex: 1 1;
  max-height: ${Dimensions.get("window").height -
  theme?.grid?.borneGutter * 2}px;
  max-width: 100%;
`;

export const TagList = styled.ScrollView``;

export const TagsListContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const Overlay = styled.Pressable`
  position: absolute;
  left: 0;
  top: 0;
  height: ${Dimensions.get("window").height}px;
  width: ${Dimensions.get("window").width}px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
`;
