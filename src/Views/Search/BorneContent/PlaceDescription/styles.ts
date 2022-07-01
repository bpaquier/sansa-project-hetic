import styled from "styled-components/native";

import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";

interface IconProps {
  secondaryStyle?: boolean;
}

export const Wrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${getColumnWidth(21, false)};
  background-color: ${theme?.color?.primary?.white};
  border-radius: ${theme?.shape?.radius?.input}px;
  padding: 32px 40px;
  z-index: 105;
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
  width: 100%;
  height: 100%;
  flex: 1 1;
  z-index: 1;
`;

export const FirstRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45%;
`;

export const SecondRow = styled.View`
  height: 55%;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
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
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  opacity: 0.2;
`;
