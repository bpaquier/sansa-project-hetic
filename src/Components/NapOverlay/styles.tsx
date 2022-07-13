import { Dimensions } from "react-native";
import styled from "styled-components/native";

import Text from "~/Components/Ui-kit/Text";

export const NapOverlayWrapper = styled.View`
  position: absolute;
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
  background-color: rgba(0, 0, 0, 0.8);
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
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ bottom }) => bottom && `top: ${bottom};`};
  ${({ left }) => left && `right: ${left};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
`;

type HelperTextWrapperProps = {
  marginTop?: number;
  marginBottom?: number;
};

export const HelperTextWrapper = styled.View<HelperTextWrapperProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`};
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
