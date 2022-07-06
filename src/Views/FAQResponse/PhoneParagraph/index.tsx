import React from "react";

import { Linking } from "react-native";

import { PhoneDecoration, PhoneTextContainer } from "./styles";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export interface PhoneParagraphProps extends TextComponentProps {
  phoneNumber: string;
}

export default function PhoneParagraph({
  phoneNumber,
  children,
  ...props
}: PhoneParagraphProps): JSX.Element {
  return (
    <PhoneTextContainer>
      <PhoneDecoration />
      <Text
        color="blue"
        {...props}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
      >
        {children}
      </Text>
    </PhoneTextContainer>
  );
}
