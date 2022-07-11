import React from "react";

import { Trans } from "react-i18next";

import { TipDecoration, TipTextContainer } from "./styles";
import Text, { TextComponentProps } from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function TipParagraph({
  children
}: TextComponentProps): JSX.Element {
  const { isMobile } = useGlobalContext();

  return (
    <TipTextContainer isMobile={isMobile}>
      <TipDecoration />
      <TextWrapper color="success" marginBottom={20} marginTop={20}>
        <Trans
          components={{
            bold: <Text color="success" weight={"bold"} />
          }}
        >
          {children}
        </Trans>
      </TextWrapper>
    </TipTextContainer>
  );
}
