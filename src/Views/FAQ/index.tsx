import React from "react";

import { useTranslation } from "react-i18next";

import FAQQuestionItem from "./FAQQuestionItem";
import FAQTitleWrapper from "./FAQTitleWrapper";
import Breadcrumb from "~/Components/Breadcrumb";
import LanguageFAQSelector from "~/Components/LanguagesMenu/LanguagesFAQSelector";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { PageContainerMobile, FAQSectionsContainers } from "~/Views/FAQ/styles";

export default function FAQ() {
  const { t } = useTranslation();

  const questionsFAQ = [
    {
      type: "hosting",
      questionIndex: 0,
      category: t("administrativeAssistance.hosting.hosting")
    },
    {
      category: t("administrativeAssistance.health.health"),
      type: "health",
      questionIndex: 1
    },
    {
      category: t("administrativeAssistance.home.home"),
      type: "home",
      questionIndex: 3
    },
    {
      category: t("administrativeAssistance.jobs.jobs"),
      type: "jobs",
      questionIndex: 2
    }
  ];

  return (
    <PageContentWrapper noPaddingX backgroundColor="white">
      <PageContainerMobile>
        <FAQSectionsContainers>
          <Breadcrumb
            url={"/plus"}
            text={t("administrativeAssistance.administrativeAssistance")}
          />
        </FAQSectionsContainers>
        <FAQTitleWrapper title="Sansa répond à vos questions" />
        <FAQSectionsContainers>
          <TextWrapper type="titleL" marginTop={24}>
            Rechercher par catégories :
          </TextWrapper>
          <TextWrapper type="titleM" marginTop={24} marginBottom={24}>
            Questions les plus fréquemment posées:
          </TextWrapper>
          {questionsFAQ.map((question, index) => (
            <FAQQuestionItem
              key={`${question.type}${question.questionIndex}`}
              questionIndex={question.questionIndex}
              index={index}
              category={question.category}
              type={question.type}
              length={questionsFAQ.length}
            />
          ))}
        </FAQSectionsContainers>
        <FAQSectionsContainers>
          <LanguageFAQSelector />
        </FAQSectionsContainers>
      </PageContainerMobile>
    </PageContentWrapper>
  );
}
