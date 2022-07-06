import React from "react";

import { Paragraph } from "..";
import PhoneParagraph from "../PhoneParagraph";
import RegularParagraph from "../RegularParagraph";
import WarningParagraph from "../WarningParagraph";
import { ResponseParagraphContainer } from "./styles";

export interface ResponseParagraphsProps {
  paragraphs: Paragraph[];
}

export default function ResponseParagraphs({
  paragraphs
}: ResponseParagraphsProps) {
  return (
    <ResponseParagraphContainer>
      {paragraphs.map(({ text, url }) => {
        if (text.startsWith("<regular>")) {
          const paragraphToRender = text.split("<regular>");
          return (
            <RegularParagraph
              key={text}
              text={paragraphToRender[1]}
              url={url}
            />
          );
        } else if (text.startsWith("<warning>")) {
          const paragraphToRender = text.split("<warning>");
          return (
            <WarningParagraph key={text} color="warning">
              {paragraphToRender[1]}
            </WarningParagraph>
          );
        } else {
          const paragraphToRender = text.split("<phone>");
          return (
            <PhoneParagraph phoneNumber={paragraphToRender[1]} key={text}>
              {paragraphToRender[1]}
            </PhoneParagraph>
          );
        }
      })}
    </ResponseParagraphContainer>
  );
}
