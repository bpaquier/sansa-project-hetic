import React from "react";

import { Trans } from "react-i18next";
import { Linking } from "react-native";
import { useNavigate } from "react-router-native";

import { WarningTextContainer } from "./styles";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface WarningParagraphProps extends TextComponentProps {
  url?: { local?: string; external?: string };
}

export default function WarningParagraph({
  children,
  url,
  ...props
}: WarningParagraphProps) {
  const navigate = useNavigate();
  const { isMobile } = useGlobalContext();
  return (
    <WarningTextContainer isMobile={isMobile}>
      <Text {...props}>
        <Trans
          components={{
            bold: <Text color="warning" weight="bold" />,
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
                color="warning"
                underline
              />
            )
          }}
        >
          {children}
        </Trans>
      </Text>
    </WarningTextContainer>
  );
}
