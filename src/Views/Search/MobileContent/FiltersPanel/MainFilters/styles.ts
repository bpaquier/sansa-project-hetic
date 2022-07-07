import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

interface TagProps {
  isSelected?: boolean;
}

export const TagsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

export const Tag = styled.TouchableOpacity`
  border-radius: ${theme?.shape?.radius?.button};
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 12px;
  height: 32px;
  border: ${({ isSelected }: TagProps) =>
    `1px solid ${
      isSelected
        ? theme?.color?.neutral?.black100
        : theme?.color?.neutral?.black5
    }`};
`;

export const IconWrapper = styled.View`
  margin-right: 8px;
`;
