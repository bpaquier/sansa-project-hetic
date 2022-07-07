import React from "react";

import { useTranslation } from "react-i18next";

import FAQCategoryCard from "./FAQCategoryCard";
import FAQQuestionItem from "./FAQQuestionItem";
import FAQTitleWrapper from "./FAQTitleWrapper";
import ForeignersIllustration from "./Illustrations/ForeignersIllustration";
import HealthIllustration from "./Illustrations/HealthIllustration";
import HomeIllustration from "./Illustrations/HomeIllustration";
import HostingIllustration from "./Illustrations/HostingIllustration";
import JobsIllustration from "./Illustrations/JobsIllustration";
import MinorsIllustration from "./Illustrations/MinorsIllustration";
import Breadcrumb from "~/Components/Breadcrumb";
import LanguageFAQSelector from "~/Components/LanguagesMenu/LanguagesFAQSelector";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import {
  PageContainerMobile,
  FAQSectionsContainers,
  CategoriesWrapper,
  CategoriesCardColumns
} from "~/Views/FAQ/styles";

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
      category: t("administrativeAssistance.job.job"),
      type: "job",
      questionIndex: 2
    },
    {
      category: t("administrativeAssistance.foreignersRights.foreignersRights"),
      type: "foreignersRights",
      questionIndex: 3
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
          <TextWrapper type="titleL" marginTop={24} marginBottom={24}>
            Rechercher par catégories :
          </TextWrapper>
          <CategoriesWrapper>
            <CategoriesCardColumns>
              <FAQCategoryCard
                illustration={<HostingIllustration />}
                category="hosting"
              />
              <FAQCategoryCard
                illustration={<HomeIllustration />}
                category="home"
              />
              <FAQCategoryCard
                illustration={<ForeignersIllustration />}
                category="foreignersRights"
              />
            </CategoriesCardColumns>
            <CategoriesCardColumns>
              <FAQCategoryCard
                illustration={<HealthIllustration />}
                category="health"
              />
              <FAQCategoryCard
                illustration={<JobsIllustration />}
                category="job"
              />
              <FAQCategoryCard
                illustration={<MinorsIllustration />}
                category="minors"
              />
            </CategoriesCardColumns>
          </CategoriesWrapper>
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
