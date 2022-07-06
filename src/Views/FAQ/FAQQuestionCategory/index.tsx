import React from "react";

import { QuestionCategoryDecoration, QuestionCategoryWrapper } from "./styles";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

export type FAQQuestionCategoryProps = {
  category: string;
};

export default function FAQQuestionCategory({
  category
}: FAQQuestionCategoryProps) {
  return (
    <QuestionCategoryWrapper>
      <QuestionCategoryDecoration />
      <TextWrapper color="blue">{category}</TextWrapper>
    </QuestionCategoryWrapper>
  );
}
