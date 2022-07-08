import styled from "styled-components/native";
import { Dimensions } from "react-native";


import Theme from "~/Styles/theme.styles";
import Text from "~/Components/Ui-kit/Text";
const { shape, grid } = Theme;

export const NapOverlayWrapper = styled.View`
  position: absolute;
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
  background-color: rgba(0, 0, 0, .8);
`;

export const TouchScreenWrapper = styled.View`
  position: absolute;
  top: 48%;
  left: 45%;
  align-items: center;
`;


type HelperTextProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  alignItems?: string;
};

export const HelperWrapper = styled.View<HelperTextProps>`
  position: absolute;
  ${({ top }: any) => top && `top: ${top};`};
  ${({ right }: any) => right && `right: ${right};`};
  ${({ bottom }: any) => bottom && `top: ${bottom};`};
  ${({ left }: any) => left && `right: ${left};`};
  ${({ alignItems }: any) => alignItems && `align-items: ${alignItems};`};
`;

type HelperTextWrapperProps = {
  marginTop?: number;
  marginBottom?: number;
};

export const HelperTextWrapper = styled.View<HelperTextWrapperProps>`
  ${({ marginTop }: any) =>
    marginTop && `margin-top: ${marginTop}px;`};
  ${({ marginBottom }: any) =>
    marginBottom && `margin-bottom: ${marginBottom}px;`};
  width: 320px;
`;

export const HelperText = styled(Text)`
  flex: 1;
  flex-wrap: wrap;
  width: 160px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 32px;
  right: 32px;
`;

export const LogoTextWrapper = styled.View`
  margin-right: 16px;
`;
