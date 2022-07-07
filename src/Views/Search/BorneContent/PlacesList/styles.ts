import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { height: globalHeight } = Dimensions.get("window");
const { color, shape, sizes, grid } = theme;

interface StyleProps {
  selected?: boolean;
}

export const LoaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SpinnerWrapper = styled.View`
  margin-right: 8px;
`;

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
  height: ${globalHeight -
  grid?.borneGutter * 2 -
  (sizes?.bornContent?.topBarHeight + 8) -
  (sizes?.bornContent?.tagsHeight + 8) -
  70}px;
`;

export const Item = styled.TouchableOpacity`
  background-color: ${({ selected }: StyleProps) =>
    selected ? "rgba(0,0,0,0.02)" : "transparent"};
`;

export const OverlayLoader = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
`;
