import React from "react";

import { Paragraph } from "..";
import PhoneParagraph from "../PhoneParagraph";
import RegularParagraph from "../RegularParagraph";
import TipParagraph from "../TipParagraph";
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
      {paragraphs.map(({ text, url }, index) => {
        if (text.startsWith("<phone>")) {
          const paragraphToRender = text.split("<phone>");
          return (
            <PhoneParagraph phoneNumber={paragraphToRender[1]} key={text}>
              {paragraphToRender[1]}
            </PhoneParagraph>
          );
        } else if (text.startsWith("<warning>")) {
          const paragraphToRender = text.split("<warning>");
          return (
            <WarningParagraph key={text} color="warning" url={url}>
              {paragraphToRender[1]}
            </WarningParagraph>
          );
        } else if (text.startsWith("<tip>")) {
          const paragraphToRender = text.split("<tip>");
          return (
            <TipParagraph key={text} color="success">
              {paragraphToRender[1]}
            </TipParagraph>
          );
        } else {
          return (
            <RegularParagraph key={`${text}${index}`} text={text} url={url} />
          );
        }
      })}
    </ResponseParagraphContainer>
  );
}
