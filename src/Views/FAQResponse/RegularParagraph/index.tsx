import React from "react";

import { Trans } from "react-i18next";
import { Linking } from "react-native";
import { useNavigate } from "react-router-native";

import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type RegularParagraphProps = {
  url?: { local?: string; external?: string };
  text: string;
};

export default function RegularParagraph({ text, url }: RegularParagraphProps) {
  const navigate = useNavigate();

  return (
    <TextWrapper color="grey" marginBottom={24}>
      <Trans
        components={{
          bold: <Text color="grey" weight={"bold"} />,
          h3: <Text color="grey" type="titleM" />,
          a: (
            <Text
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onPress={() => {
                if (url?.local) {
                  navigate(url.local);
                } else if (url?.external) {
                  Linking.openURL(url.external);
                }
              }}
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
