import { useState } from "react";

import { StyledButton, SpinnerContainer, TextContainer } from "./styles";
import Spinner from "~/Components/Icons/Spinner";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export interface ButtonProps {
  onPressIn?: () => any;
  onPressOut?: () => any;
  onPress?: () => any;
  onLongPress?: () => any;
  text?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: "primary" | "secondary" | "tertiary";
  fitContent?: boolean;
}

export default function Button({
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  text,
  fitContent,
  type,
  isDisabled,
  isLoading
}: ButtonProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const color: TextComponentProps["color"] = isDisabled
    ? "grey"
    : type === "primary"
    ? "white"
    : "blue";

  return (
    <StyledButton
      {...{
        onLongPress,
        onPress,
        onPressIn,
        onPressOut,
        fitContent,
        type,
        isActive,
        isDisabled
      }}
      onPressIn={() => !isLoading && !isDisabled && setIsActive(true)}
      onPressOut={() => !isLoading && !isDisabled && setIsActive(false)}
    >
      <TextContainer {...{ isLoading, isDisabled }}>
        <Text
          color={isActive && type === "tertiary" ? "darkBlue" : color}
          weight="bold"
        >
          {text}
        </Text>
      </TextContainer>
      {isLoading && !isDisabled && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </StyledButton>
  );
}
