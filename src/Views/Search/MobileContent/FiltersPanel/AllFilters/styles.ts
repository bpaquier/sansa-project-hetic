import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

interface TagProps {
  color?: string;
}

export const TagsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
`;

export const Tag = styled.TouchableOpacity`
  border-radius: ${theme?.shape?.radius?.button};
  border: ${({ color }: TagProps) => `1px solid ${color}`};
  height: 32px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const IconWrapper = styled.View`
  margin-left: 8px;
`;

export const NoResultsWrapper = styled.View`
  align-items: center;
`;

export const IllustrationWrapper = styled.View`
  margin-top: 40px;
  margin-bottom: 16px;
`;
