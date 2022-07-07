import React from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-native";

import FAQQuestionItem from "../FAQ/FAQQuestionItem";
import FAQTitleWrapper from "../FAQ/FAQTitleWrapper";
import {
  FAQSectionsContainers,
  PageContainerBorne,
  PageContainerMobile
} from "../FAQ/styles";
import Breadcrumb from "~/Components/Breadcrumb";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import LanguageFAQSelector from "~/Components/LanguagesMenu/LanguagesFAQSelector";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";
import { QuestionsContainer } from "./styles";
import Separator from "~/Components/Ui-kit/Separator";

type categoryFAQTypeQuestions = {
  id: number;
  title: string;
  text: { text: string; url: { locale: string; external: string } }[];
};

export default function FAQCategory() {
  const { type } = useParams();
  const { t } = useTranslation();
  const { isMobile } = useGlobalContext();

  const questions: categoryFAQTypeQuestions[] = t(
    `administrativeAssistance.${type}.questions`,
    {
      returnObjects: true
    }
  );

  const PageContainer = (
    isMobile ? PageContainerMobile : PageContainerBorne
  ) as React.ElementType;

  return (
    <PageContentWrapper noPaddingX backgroundColor="white">
      <PageContainer>
        <FAQSectionsContainers isMobile={isMobile}>
          <Breadcrumb
            url="/faq"
            text={t("administrativeAssistance.administrativeAssistance")}
          />
        </FAQSectionsContainers>
        {isMobile && (
          <FAQTitleWrapper
            title={t(`administrativeAssistance.${type}.${type}`)}
          />
        )}
        {!isMobile && (
          <Separator orientation="horizontal" columnWidth={19} margin={24} />
        )}
        <FAQSectionsContainers isMobile={isMobile} fillHeight>
          <TextWrapper type="titleL" marginTop={24} marginBottom={24}>
            {t(`administrativeAssistance.${type}.sectionTitle`)}
          </TextWrapper>
          <QuestionsContainer>
            {questions.map(
              (question, index) =>
                type && (
                  <FAQQuestionItem
                    key={question.id}
                    questionIndex={question.id}
                    index={index}
                    type={type}
                    length={questions.length}
                    isShadow={!isMobile}
                  />
                )
            )}
          </QuestionsContainer>
          {isMobile && <LanguageFAQSelector />}
        </FAQSectionsContainers>
      </PageContainer>
    </PageContentWrapper>
  );
}
