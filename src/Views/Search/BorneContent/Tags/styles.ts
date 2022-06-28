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
  bottom: 0;
  left: ${getColumnWidth(3, false)};
  flex-direction: row;
`;

export const Tag = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: ${theme?.size?.bornContent?.tagsHeight}px;
  background-color: ${({ bgColor }: TagProps) =>
    bgColor ? bgColor : theme?.color?.primary?.white};
  margin-right: 8px;
  border-radius: ${theme?.shape?.radius?.button};
  border: ${({ borderColor }: TagProps) =>
    borderColor ? `2px solid ${borderColor}` : "none"};
  flex-grow: 0;
  margin-bottom: ${({ marginBottom }: TagProps) =>
    marginBottom ? `${marginBottom}px` : "0"};
`;

export const TagListContainer = styled.View`
  align-items: flex-start;
  position: absolute;
  bottom: ${theme?.size?.bornContent?.tagsHeight + 8}px;
  right: 0;
  background-color: ${theme?.color?.primary?.white};
  border-radius: ${theme?.shape?.radius?.input}px;
  padding: 20px;
  max-height: 300px;
`;

export const TagList = styled.ScrollView``;

export const TagsListContent = styled.View`
  align-items: flex-start;
`;
