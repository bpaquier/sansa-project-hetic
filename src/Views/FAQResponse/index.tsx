import React from "react";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-native";

import FAQQuestionCategory from "../FAQ/FAQQuestionCategory";
import FAQQuestionItem from "../FAQ/FAQQuestionItem";
import ResponseParagraphs from "./ResponseParagraphs";
import { QuestionsWrapper, GlobalWrapper, PageWrapper } from "./styles";
import Breadcrumb from "~/Components/Breadcrumb";
import PageContentWrapper from "~/Components/PageContentWrapper";
import { TextComponentProps } from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

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
  } else if (type === "job") {
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
  const paragraphs: Paragraph[] = t(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `administrativeAssistance.${type}.questions.${index}.text`,
    {
      returnObjects: true
    }
  );

  const questionsPerIndexAndType = getQuestionsPerIndexAndType(index, type);

  return (
    <>
      {type && index && (
        <PageContentWrapper noPaddingX backgroundColor="white">
          <PageWrapper>
            <GlobalWrapper>
              <Breadcrumb
                url={`/faq/${type}`}
                text={t(`administrativeAssistance.${type}.sectionTitle`)}
              />
              <TextWrapper type="titleL" marginTop={16}>
                {t(`administrativeAssistance.${type}.questions.${index}.title`)}
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
                    type={type}
                    index={i}
                    questionIndex={question}
                    length={questionsPerIndexAndType.length}
                    color="blue"
                    bold
                  />
                ))}
            </QuestionsWrapper>
          </PageWrapper>
        </PageContentWrapper>
      )}
    </>
  );
}
