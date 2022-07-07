import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import FAQQuestionCategory from "../FAQQuestionCategory";
import { QuestionsContainer, FAQQuestionTexts, GeneralContent } from "./styles";
import ChevrontRight from "~/Components/Icons/System/Arrows/ChevronRight";
import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import theme from "~/Styles/theme.styles";

export interface FAQQuestionItemProps {
  type: string;
  questionIndex: number;
  index: number;
  length: number;
  showCategory?: boolean;
  bold?: boolean;
  color?: string;
}

export default function FAQQuestionItem({
  type,
  questionIndex,
  index,
  length,
  showCategory,
  bold,
  color
}: FAQQuestionItemProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <QuestionsContainer
        activeOpacity={0.7}
        onPress={() => navigate(`/faq/${type}/${questionIndex}`)}
      >
        {showCategory && (
          <FAQQuestionCategory
            category={t(`administrativeAssistance.${type}.${type}`)}
          />
        )}
        <GeneralContent>
          <FAQQuestionTexts>
            <TextWrapper
              weight={bold ? "bold" : "regular"}
              color="grey"
              marginTop={8}
            >
              {t(
                `administrativeAssistance.${type}.questions.${questionIndex}.title`
              )}
            </TextWrapper>
          </FAQQuestionTexts>
          <ChevrontRight color={theme.color.primary.blue} width={16} />
        </GeneralContent>
      </QuestionsContainer>
      {index < length - 1 && (
        <Separator
          orientation="horizontal"
          columnWidth={6}
          margin={16}
          customColor={color}
        />
      )}
    </>
  );
}
