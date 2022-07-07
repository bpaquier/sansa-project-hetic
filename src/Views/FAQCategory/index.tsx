import React from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-native";

import FAQQuestionItem from "../FAQ/FAQQuestionItem";
import FAQTitleWrapper from "../FAQ/FAQTitleWrapper";
import { FAQSectionsContainers, PageContainerMobile } from "../FAQ/styles";
import Breadcrumb from "~/Components/Breadcrumb";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type categoryFAQTypeQuestions = {
  id: number;
  title: string;
  text: { text: string; url: { locale: string; external: string } }[];
};

export default function FAQCategory() {
  const { type } = useParams();
  const { t } = useTranslation();

  const questions: categoryFAQTypeQuestions[] = t(
    `administrativeAssistance.${type}.questions`,
    {
      returnObjects: true
    }
  );

  return (
    <PageContentWrapper noPaddingX backgroundColor="white">
      <PageContainerMobile>
        <FAQSectionsContainers>
          <Breadcrumb
            url="/faq"
            text={t("administrativeAssistance.administrativeAssistance")}
          />
        </FAQSectionsContainers>
        <FAQTitleWrapper
          title={t(`administrativeAssistance.${type}.${type}`)}
        />
        <FAQSectionsContainers>
          <TextWrapper type="titleL" marginTop={24} marginBottom={24}>
            {t(`administrativeAssistance.${type}.sectionTitle`)}
          </TextWrapper>
          {questions.map(
            (question, index) =>
              type && (
                <FAQQuestionItem
                  key={question.id}
                  questionIndex={question.id}
                  index={index}
                  type={type}
                  length={questions.length}
                />
              )
          )}
        </FAQSectionsContainers>
      </PageContainerMobile>
    </PageContentWrapper>
  );
}
