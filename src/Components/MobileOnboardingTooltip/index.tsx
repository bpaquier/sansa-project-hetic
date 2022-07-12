import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Animated, ImageBackground } from "react-native";
import Button from "~/Components/Ui-kit/Button";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { TooltipWrapper, TooltipTriangle } from "./styles";

export default function MobileOnboardingTooltip(props): JSX.Element {
  return (
    <TooltipWrapper top={props.top} right={props.right} bottom={props.bottom} left={props.left}>
      <TooltipTriangle position={props.ArrowPosition} />
      <TextWrapper marginBottom={8} type="titleM">{props.title}</TextWrapper>
      <TextWrapper marginBottom={8}>{props.description}</TextWrapper>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <TextWrapper color="blue" weight="bold" link to="/search">Passer</TextWrapper>
        <Button text={props.nextText} onPress={props.onNext} />
      </View>
    </TooltipWrapper>
  );
}
