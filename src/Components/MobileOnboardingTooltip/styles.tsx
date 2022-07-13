import styled from "styled-components/native";

import theme from "~/Styles/theme.styles";

const { color } = theme;

type TooltipWrapperProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export const TooltipWrapper = styled.View<TooltipWrapperProps>`
  position: absolute;
  z-index: 1;
  padding: 20px;
  border-radius: 16px;
  ${({ top }) => top && `top: ${top};`};
  ${({ right }) => right && `right: ${right};`};
  ${({ bottom }) => bottom && `bottom: ${bottom};`};
  ${({ left }) => left && `left: ${left};`};
  width: 244px;
  background-color: ${color.primary.blueExtraLight};
`;

type TooltipTriangle = {
  position?: string;
};

export const TooltipTriangle = styled.View<TooltipTriangle>`
  position: absolute;
  ${({ position }) => position === "top" && `top: -6px;`};
  ${({ position }) => position === "bottom" && `bottom: -6px;`};
  left: 112px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${color.primary.blueExtraLight};
  transform: rotate(45deg);
`;

export const TooltipButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
