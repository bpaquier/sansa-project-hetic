import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { height: globalHeight } = Dimensions.get("window");
const { color, shape, size, grid } = theme;

export const ListWrapper = styled.View`
  position: absolute;
  left: ${getColumnWidth(3, false)};
  top: ${size?.bornContent?.topBarHeight + 8}px;
  width: ${getColumnWidth(8, false)};
  border-radius: ${shape?.radius?.input}px;
  overflow: hidden;
  background-color: ${color.primary.white};
`;

export const Content = styled.ScrollView`
  height: ${globalHeight -
  grid?.borneGutter * 2 -
  (size?.bornContent?.topBarHeight + 8) -
  (size?.bornContent?.tagsHeight + 8) -
  70}px;
  background-color: ${color.primary.orange};
`;
