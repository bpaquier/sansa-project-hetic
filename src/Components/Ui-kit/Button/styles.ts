import styled from "styled-components/native";

import { ButtonProps } from "./index";
import theme from "~/Styles/theme.styles";
const { color, shape } = theme;

interface BackgroundPrpos extends ButtonProps {
  isActive?: boolean;
}

export const ButtonWrapper = styled.View`
  justify-content: ${({ horizontalPosition }: ButtonProps) => {
    switch (horizontalPosition) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
      default:
        return "center";
    }
  }};
  flex-direction: row;
`;

export const StyledButton = styled.Pressable`
  position: relative;
  justify-content: center;
  align-items: center;
  flex-grow: ${({ fullWidth }) => (fullWidth ? 1 : 0)};
  padding: ${({ noPadding }: ButtonProps) =>
    noPadding === true ? "0" : "16px"};
  background-color: ${({ type, isActive, isDisabled }: BackgroundPrpos) => {
    if (isDisabled && type !== "tertiary") {
      return color?.neutral?.black10;
    } else if (isActive) {
      return type === "primary"
        ? color?.primary?.blueDark
        : type === "secondary"
        ? color?.primary?.blueLight
        : "transparent";
    } else {
      return type === "primary"
        ? color?.primary?.blue
        : type === "secondary"
        ? color?.neutral?.black5
        : "transparent";
    }
  }};

  border: ${({ isDisabled, type }: ButtonProps) =>
    type === "tertiary"
      ? "none"
      : isDisabled
      ? color?.neutral?.black10
      : color?.primary?.blue};
  border-radius: ${shape?.radius?.button};
  width: auto;
`;

export const TextContainer = styled.View`
  opacity: ${({ isLoading, isDisabled }: ButtonProps) =>
    isLoading && !isDisabled ? "0" : "1"};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SpinnerContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
