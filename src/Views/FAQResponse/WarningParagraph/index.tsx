import React from "react";

import { Trans } from "react-i18next";

import { WarningTextContainer } from "./styles";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";

export default function WarningParagraph({
  children,
  ...props
}: TextComponentProps) {
  return (
    <WarningTextContainer>
      <Text {...props}>
        <Trans components={{ bold: <Text color="warning" weight={"bold"} /> }}>
          {children}
        </Trans>
      </Text>
    </WarningTextContainer>
  );
}
