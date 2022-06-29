import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import Theme from "~/Styles/theme.styles";

const { color, shape } = Theme;

export const ConnectedIllustrationsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
`;

export const ConnectedIllustrationWrapper = styled.Pressable`
  width: ${getColumnWidth(4, false)};
  border: 1px solid ${color.neutral.black5};
  border-radius: ${shape.radius.input}px;
  height: 165px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
