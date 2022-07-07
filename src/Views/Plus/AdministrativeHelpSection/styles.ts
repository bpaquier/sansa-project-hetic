import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  padding: 24px ${getColumnWidth(1, true)}px;
`;

export const FlashlightIllustrationWrapper = styled.View`
  width: 100%;
  height: 184px;
  margin-top: 24px;
  position: absolute;
  bottom: -10px;
  left: -10px;
`;
