import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import FAQQuestionCategory from "../FAQQuestionCategory";
import { QuestionsContainer, FAQQuestionTexts, GeneralContent } from "./styles";
import ChevrontRight from "~/Components/Icons/System/Arrows/ChevronRight";
import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";

export interface FAQQuestionItemProps {
  type: string;
  questionIndex: number;
  index: number;
  length: number;
  showCategory?: boolean;
  bold?: boolean;
  color?: string;
  isShadow?: boolean;
}

export default function FAQQuestionItem({
  type,
  questionIndex,
  index,
  length,
  showCategory,
  bold,
  color,
  isShadow
}: FAQQuestionItemProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isMobile } = useGlobalContext();

  return (
    <>
      <QuestionsContainer
        activeOpacity={0.7}
        style={isShadow && theme.boxShadow.panelAndroid}
        isShadow={isShadow}
        onPress={() => navigate(`/faq/${type}/${questionIndex}`)}
      >
        <GeneralContent>
          <FAQQuestionTexts>
            {showCategory && (
              <FAQQuestionCategory
                category={t(`administrativeAssistance.${type}.${type}`)}
              />
            )}
            <TextWrapper
              weight={bold ? "bold" : "regular"}
              color="grey"
              marginTop={isShadow ? 0 : 8}
            >
              {t(
                `administrativeAssistance.${type}.questions.${questionIndex}.title`
              )}
            </TextWrapper>
          </FAQQuestionTexts>
          <ChevrontRight color={theme.color.primary.blue} width={16} />
        </GeneralContent>
      </QuestionsContainer>
      {index < length - 1 && !isShadow && (
        <Separator
          orientation="horizontal"
          columnWidth={isMobile ? 6 : 1}
          margin={16}
          customColor={color}
        />
      )}
    </>
  );
}
