import React from "react";

import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { useParams } from "react-router-native";

import FAQQuestionCategory from "../FAQ/FAQQuestionCategory";
import FAQQuestionItem from "../FAQ/FAQQuestionItem";
import { PageContainerBorne } from "../FAQ/styles";
import ResponseParagraphs from "./ResponseParagraphs";
import {
  QuestionsWrapper,
  GlobalWrapperMobile,
  GlobalWrapperBorne,
  PageWrapper
} from "./styles";
import Breadcrumb from "~/Components/Breadcrumb";
import LanguageFAQSelector from "~/Components/LanguagesMenu/LanguagesFAQSelector";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import { TextComponentProps } from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";

export type Paragraph = {
  url?: { local?: string; external?: string };
  text: string;
};
export interface PhoneParagraphProps extends TextComponentProps {
  phoneNumber: string;
}

const getQuestionsPerIndexAndType = (index?: string, type?: string) => {
  if (type === "hosting" || type === "home") {
    if (index === "0") {
      return [3, 1, 2];
    } else if (index === "1") {
      return [0, 3, 4];
    } else if (index === "2") {
      return [0, 1, 4];
    } else if (index === "3" || index === "4") {
      return [0, 1, 2];
    }
  } else if (type === "foreignersRights" || type === "health") {
    if (index === "0") {
      return [1, 2, 3];
    } else if (index === "1") {
      return [0, 2, 3];
    } else if (index === "2") {
      return [0, 1, 3];
    } else if (index === "3") {
      return [0, 1, 2];
    }
  } else if (type === "job" || type === "minors") {
    if (index === "0") {
      return [1, 2];
    } else if (index === "1") {
      return [0, 2];
    } else if (index === "2") {
      return [0, 1];
    }
  }
};

export default function FAQResponse() {
  const { type, index } = useParams();
  const { t } = useTranslation();
  const { isMobile } = useGlobalContext();
  const paragraphs: Paragraph[] = t(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `administrativeAssistance.${type}.questions.${index}.text`,
    {
      returnObjects: true
    }
  );

  const questionsPerIndexAndType = getQuestionsPerIndexAndType(index, type);

  const PageContainer = (
    isMobile ? PageWrapper : PageContainerBorne
  ) as React.ElementType;

  const GlobalWrapper = (
    isMobile ? GlobalWrapperMobile : GlobalWrapperBorne
  ) as React.ElementType;

  return (
    <>
      {type && index && (
        <PageContentWrapper noPaddingX backgroundColor="white" noScroll>
          {isMobile && (
            <GlobalWrapper>
              <Breadcrumb
                marginBottom={16}
                url={`/faq/${type}`}
                text={t(`administrativeAssistance.${type}.sectionTitle`)}
              />
            </GlobalWrapper>
          )}
          <>
            <PageContainer>
              {!isMobile && (
                <GlobalWrapper>
                  <Breadcrumb
                    marginBottom={24}
                    url={`/faq/${type}`}
                    text={t(`administrativeAssistance.${type}.sectionTitle`)}
                  />
                </GlobalWrapper>
              )}
              <ScrollView>
                {!isMobile && (
                  <Separator orientation="horizontal" columnWidth={19} />
                )}
                <GlobalWrapper>
                  <TextWrapper
                    type="titleL"
                    marginTop={isMobile ? 0 : 40}
                    marginBottom={16}
                  >
                    {t(
                      `administrativeAssistance.${type}.questions.${index}.title`
                    )}
                  </TextWrapper>
                  <ResponseParagraphs paragraphs={paragraphs} />
                </GlobalWrapper>
                <QuestionsWrapper>
                  <FAQQuestionCategory
                    category={t(`administrativeAssistance.${type}.${type}`)}
                  />
                  <TextWrapper type="titleM" marginTop={8} marginBottom={24}>
                    {t("administrativeAssistance.otherQuestions")}
                  </TextWrapper>
                  {questionsPerIndexAndType &&
                    questionsPerIndexAndType.map((question, i) => (
                      <FAQQuestionItem
                        key={question}
                        isShadow={!isMobile}
                        type={type}
                        index={i}
                        questionIndex={question}
                        length={questionsPerIndexAndType.length}
                        color={theme.color.primary.blue}
                        bold
                      />
                    ))}
                </QuestionsWrapper>
              </ScrollView>
              {isMobile && (
                <GlobalWrapper>
                  <LanguageFAQSelector />
                </GlobalWrapper>
              )}
            </PageContainer>
          </>
        </PageContentWrapper>
      )}
    </>
  );
}
