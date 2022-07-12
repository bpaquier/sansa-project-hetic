import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface CheckbowWrapperProps {
  reversed?: boolean;
}

export const FiltersWrapper = styled.ScrollView`
  width: ${getColumnWidth(13, false)}px;
  padding: 32px 64px;
  border-radius: ${theme?.shape?.radius?.input}px;
  background-color: ${theme?.color?.primary?.white};
  position: absolute;
  right: ${theme?.grid?.borneGutter}px;
  top: ${theme?.sizes?.bornContent?.topBarHeight +
  theme?.grid?.borneGutter +
  8}px;
  z-index: 1;
  max-height: ${Dimensions?.get("window").height / 2}px;
  border: ${theme?.color?.neutral?.black5};
`;

export const Title = styled.View`
  margin-bottom: 24px;
`;

export const Content = styled.View`
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxWrapper = styled.View`
  width: 47%;
  margin-bottom: 25px;
  align-items: flex-start;
  ${({ reversed }: CheckbowWrapperProps) =>
    reversed ? "margin-right: 2%" : ""}
  margin-right: 2%;
`;

export const LoadingOverlay = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
`;
