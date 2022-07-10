import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface IconProps {
  secondaryStyle?: boolean;
}

export const Wrapper = styled.View`
  position: absolute;
  top: ${theme?.grid?.borneGutter}px;
  right: ${theme?.grid?.borneGutter}px;
  height: 100%;
  width: ${getColumnWidth(21, false)}px;
  background-color: ${theme?.color?.primary?.white};
  border-radius: ${theme?.shape?.radius?.input}px;
  padding: 32px 40px;
  z-index: 201;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const CloseIconWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  background-color: ${({ secondaryStyle }: IconProps) =>
    secondaryStyle ? "transparent" : theme?.color?.primary?.blue};
  border: ${({ secondaryStyle }: IconProps) =>
    secondaryStyle ? `2px solid ${theme?.color?.primary?.blue}` : "none"};
`;

export const ContentWrapper = styled.View`
  margin-top: 43px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  flex: 1 1;
  z-index: 1;
`;

export const FirstRow = styled.View`
  width: 100%;
  height: 45%;
  flex-wrap: wrap;
  max-height: 300px;
`;

export const SecondRow = styled.View`
  flex: 1 1;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  max-height: 400px;
`;

export const Service = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 60px;
  margin-bottom: 8px;
`;

export const SmallTitleWrapper = styled.View`
  margin: 15px 0 30px;
`;

export const SeparatorWrapper = styled.View`
  height: 80%;
  margin: 0 40px;
`;

export const IllustrationWrapper = styled.View`
  position: absolute;
  bottom: -10%;
  right: -4%;
  width: 50%;
  height: 120%;
  opacity: 0.2;
`;
