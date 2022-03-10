import styled from "styled-components/native";

import { ButtonProps } from "./index";
import { gridColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";
const { color, shape } = theme;

interface BackgroundPrpos extends ButtonProps {
  isActive?: boolean;
}

export const StyledButton = styled.Pressable`
  position: relative;
  text-align: center;
  justify-content: center;
  flex: 1;
  align-items: center;
  padding: ${({ type }: ButtonProps) =>
    type === "tertiary" ? "0" : "16px 16px 16px 16px"};
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
      return type === "primary" ? color?.primary?.blue : "transparent";
    }
  }};

  border: ${({ type, isDisabled }: ButtonProps) =>
    type === "secondary" && !isDisabled ? color?.primary?.blue : "none"};
  border-radius: 8px;
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
