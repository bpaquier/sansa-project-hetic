import { useState } from "react";

import {
  ButtonWrapper,
  StyledButton,
  SpinnerContainer,
  TextContainer
} from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";
import theme from "~/Styles/theme.styles";

export interface ButtonProps {
  onPressIn?: () => any;
  onPressOut?: () => any;
  onPress?: () => any;
  onLongPress?: () => any;
  text?: string;
  isFilterLoading?: boolean;
  isDisabled?: boolean;
  type?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  horizontalPosition?: "left" | "center" | "right";
  noPadding?: boolean;
}

export default function ButtonComponent({
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  text,
  fullWidth,
  type = "primary",
  isDisabled,
  isFilterLoading,
  horizontalPosition = "center",
  noPadding = false
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const color: TextComponentProps["color"] = isDisabled
    ? "grey"
    : type === "primary"
    ? "white"
    : "blue";

  return (
    <ButtonWrapper {...{ horizontalPosition }}>
      <StyledButton
        {...{
          onLongPress,
          onPress,
          onPressIn,
          onPressOut,
          fullWidth,
          type,
          isActive,
          isDisabled,
          noPadding
        }}
        onPressIn={() => !isFilterLoading && !isDisabled && setIsActive(true)}
        onPressOut={() => !isFilterLoading && !isDisabled && setIsActive(false)}
      >
        <TextContainer {...{ isFilterLoading, isDisabled }}>
          <Text
            color={isActive && type === "tertiary" ? "darkBlue" : color}
            weight="bold"
          >
            {text}
          </Text>
        </TextContainer>
        {isFilterLoading && !isDisabled && (
          <SpinnerContainer>
            <Spinner
              {...(type === "primary" && {
                color: theme?.color?.primary?.white
              })}
            />
          </SpinnerContainer>
        )}
      </StyledButton>
    </ButtonWrapper>
  );
}
