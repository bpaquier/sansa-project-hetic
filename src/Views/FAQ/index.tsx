import React from "react";

import { useTranslation } from "react-i18next";

import FAQCategoryCardsWrapper from "./FAQCategoryCardsWrapper";
import FAQQuestionItem from "./FAQQuestionItem";
import FAQTitleWrapper from "./FAQTitleWrapper";
import Breadcrumb from "~/Components/Breadcrumb";
import LanguageFAQSelector from "~/Components/LanguagesMenu/LanguagesFAQSelector";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import {
  PageContainerMobile,
  FAQSectionsContainers,
  PageContainerBorne,
  ColumnsContainersMobile,
  ColumnsContainersBorne,
  FAQQuestionsContainer
} from "~/Views/FAQ/styles";

const questionsFAQ = [
  {
    type: "hosting",
    questionIndex: 0
  },
  {
    type: "health",
    questionIndex: 0
  },
  {
    type: "home",
    questionIndex: 2
  },
  {
    type: "job",
    questionIndex: 1
  },
  {
    type: "foreignersRights",
    questionIndex: 3
  }
];

export default function FAQ() {
  const { t } = useTranslation();
  const { isMobile } = useGlobalContext();

  const PageContainer = (
    isMobile ? PageContainerMobile : PageContainerBorne
  ) as React.ElementType;

  const ColumnsContainer = (
    isMobile ? ColumnsContainersMobile : ColumnsContainersBorne
  ) as React.ElementType;

  return (
    <PageContentWrapper noPaddingX backgroundColor="white" noScroll>
      <>
        {isMobile && (
          <FAQSectionsContainers isMobile>
            <Breadcrumb marginBottom={16} url={"/plus"} text={t("plus.plus")} />
          </FAQSectionsContainers>
        )}
        <PageContainer>
          {!isMobile && (
            <FAQSectionsContainers>
              <Breadcrumb url={"/plus"} text={t("plus.plus")} />
            </FAQSectionsContainers>
          )}
          {!isMobile && (
            <Separator orientation="horizontal" columnWidth={19} margin={28} />
          )}
          {isMobile && (
            <FAQTitleWrapper
              title={t("administrativeAssistance.sansaAnswerQuestions")}
            />
          )}
          <FAQSectionsContainers isMobile={isMobile} row={!isMobile}>
            <ColumnsContainer>
              <TextWrapper type="titleL" marginTop={24} marginBottom={24}>
                {t("administrativeAssistance.searchByCategory")}
              </TextWrapper>
              <FAQCategoryCardsWrapper />
            </ColumnsContainer>
            <ColumnsContainer>
              <TextWrapper
                type={isMobile ? "titleM" : "titleL"}
                marginTop={24}
                marginBottom={24}
              >
                {t("administrativeAssistance.mostAskedQuestions")}
              </TextWrapper>
              <FAQQuestionsContainer
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: "space-between"
                }}
                isMobile={isMobile}
              >
                {questionsFAQ.map((question, index) => (
                  <FAQQuestionItem
                    key={`${question.type}${question.questionIndex}`}
                    questionIndex={question.questionIndex}
                    index={index}
                    showCategory
                    type={question.type}
                    length={questionsFAQ.length}
                  />
                ))}
              </FAQQuestionsContainer>
            </ColumnsContainer>
          </FAQSectionsContainers>
          {isMobile && (
            <FAQSectionsContainers isMobile={isMobile}>
              <LanguageFAQSelector />
            </FAQSectionsContainers>
          )}
        </PageContainer>
      </>
    </PageContentWrapper>
  );
}
