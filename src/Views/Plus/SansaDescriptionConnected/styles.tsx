import styled from "styled-components/native";

import Theme from "~/Styles/theme.styles";

const { color, shape } = Theme;

export const ConnectedIllustrationsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  flex: 1;
`;

export const ConnectedIllustrationWrapper = styled.Pressable`
  width: 48%;
  border: 1px solid ${color.neutral.black5};
  border-radius: ${shape.radius.input}px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 46%;
  overflow: hidden;
`;
