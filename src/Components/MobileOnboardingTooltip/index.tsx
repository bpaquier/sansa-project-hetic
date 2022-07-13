import React from "react";

import {
  TooltipWrapper,
  TooltipTriangle,
  TooltipButtonsWrapper
} from "./styles";
import Button from "~/Components/Ui-kit/Button";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

interface props {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  ArrowPosition?: "top" | "bottom";
  title: string;
  description: string;
  nextText: string;
  onNext(): void;
}

export default function MobileOnboardingTooltip(props: props): JSX.Element {
  return (
    <TooltipWrapper
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
    >
      <TooltipTriangle position={props.ArrowPosition} />
      <TextWrapper marginBottom={8} type="titleM">
        {props.title}
      </TextWrapper>
      <TextWrapper marginBottom={8}>{props.description}</TextWrapper>
      <TooltipButtonsWrapper>
        <TextWrapper color="blue" weight="bold" link to="/search">
          Passer
        </TextWrapper>
        <Button text={props.nextText} onPress={() => props.onNext()} />
      </TooltipButtonsWrapper>
    </TooltipWrapper>
  );
}
