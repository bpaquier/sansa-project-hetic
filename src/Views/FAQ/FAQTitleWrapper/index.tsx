import React from "react";

import { FAQTitleWrapperView } from "./styles";
import TextWrapper, { TextWrapperProps } from "~/Components/Ui-kit/TextWrapper";

interface FAQTitleWrapperProps extends TextWrapperProps {
  title: string;
}

export default function FAQTitleWrapper({
  title,
  ...props
}: FAQTitleWrapperProps) {
  return (
    <FAQTitleWrapperView>
      <TextWrapper color="white" type="titleXL" {...props}>
        {title}
      </TextWrapper>
    </FAQTitleWrapperView>
  );
}
