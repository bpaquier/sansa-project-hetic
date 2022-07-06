import React from "react";

import { Trans } from "react-i18next";
import { Linking } from "react-native";

import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

export interface PhoneParagraphProps extends TextComponentProps {
  phoneNumber: string;
}

type RegularParagraphProps = {
  url?: string;
  text: string;
};

export default function RegularParagraph({ text, url }: RegularParagraphProps) {
  return (
    <TextWrapper color="grey" marginBottom={24}>
      <Trans
        components={{
          bold: <Text color="grey" weight={"bold"} />,
          a: (
            <Text
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPress={() => url && Linking.openURL(url)}
              weight="bold"
              color="blue"
            />
          )
        }}
      >
        {text}
      </Trans>
    </TextWrapper>
  );
}
