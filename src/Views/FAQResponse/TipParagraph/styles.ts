import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

const { color } = theme;

type TipTextContainerProps = {
  isMobile?: boolean;
};

export const TipTextContainer = styled.View<TipTextContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  width: ${({ isMobile }) =>
    getColumnWidth(isMobile ? 24 : 17, isMobile ?? false)}px;
`;

export const TipDecoration = styled.View`
  height: 100%;
  width: 10px;
  background-color: ${color.semantic.success};
  margin-right: 16px;
`;
