import React from "react";

import { FAQTitleWrapperView } from "./styles";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type FAQTitleWrapperProps = {
  title: string;
};

export default function FAQTitleWrapper({ title }: FAQTitleWrapperProps) {
  return (
    <FAQTitleWrapperView>
      <TextWrapper color="white" type="titleXL">
        {title}
      </TextWrapper>
    </FAQTitleWrapperView>
  );
}
