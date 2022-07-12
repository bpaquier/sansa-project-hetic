import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { height: globalHeight } = Dimensions.get("window");
const { color, shape, sizes, grid } = theme;

export const ListWrapper = styled.View`
  position: absolute;
  left: ${getColumnWidth(3, false)}px;
  margin-left: ${grid?.borneGutter}px;
  top: ${sizes?.bornContent?.topBarHeight + grid?.borneGutter + 8}px;
  width: ${getColumnWidth(7.5, false)}px;
  border-radius: ${shape?.radius?.input}px;
  overflow: hidden;
  background-color: ${color.primary.white};
`;

export const ListContent = styled.ScrollView`
  max-height: ${globalHeight -
  grid?.borneGutter * 2 -
  (sizes?.bornContent?.topBarHeight + 8) -
  (sizes?.bornContent?.tagsHeight + 8) -
  70}px;
`;

export const ListItem = styled.View`
  ${({ isSelected }: { isSelected?: boolean; lastItem?: boolean }) =>
    isSelected ? `background-color: rgba(0,0,0,0.02)` : ""}
  ${({ lastItem }: { isSelected?: boolean; lastItem?: boolean }) =>
    lastItem ? `padding-bottom: 16px` : ""}
`;

export const ItemWrapper = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px 0;
`;

export const InfoWrapper = styled.View`
  flex: 1 1;
  margin-left: 14px;
`;

export const TextWrapper = styled.View`
  margin-bottom: 12px;
`;

export const TextStyled = styled.View`
  margin-bottom: 2px;
`;

export const IconWrapper = styled.View`
  margin-right: 12px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  padding: 10px 0;
`;
export const IndexWrapper = styled.View`
  height: 24px;
  width: 24px;
  background-color: ${theme?.color?.primary?.blueExtraDark};
  border-radius: ${theme?.shape?.radius?.checkbox}px;
  align-items: center;
`;

export const ListHeader = styled.TouchableOpacity`
  padding: 16px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LoaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpinnerWrapper = styled.View`
  margin-right: 8px;
`;

export const LoadingOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
`;
