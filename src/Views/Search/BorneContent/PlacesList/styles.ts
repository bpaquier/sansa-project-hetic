import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { height: globalHeight } = Dimensions.get("window");
const { color, shape, size, grid } = theme;

interface StyleProps {
  selected?: boolean;
}

export const ListWrapper = styled.View`
  position: absolute;
  left: ${getColumnWidth(3, false)};
  top: ${size?.bornContent?.topBarHeight + 8}px;
  width: ${getColumnWidth(7.5, false)};
  border-radius: ${shape?.radius?.input}px;
  overflow: hidden;
  background-color: ${color.primary.white};
`;

export const ListContent = styled.ScrollView`
  height: ${globalHeight -
  grid?.borneGutter * 2 -
  (size?.bornContent?.topBarHeight + 8) -
  (size?.bornContent?.tagsHeight + 8) -
  70}px;
`;

export const Item = styled.TouchableOpacity`
  background-color: ${({ selected }: StyleProps) =>
    selected ? "rgba(0,0,0,0.02)" : "transparent"};
`;
