import React from "react";

import { useTranslation } from "react-i18next";

import FAQCategoryCard from "../FAQCategoryCard";
import ForeignersIllustration from "../Illustrations/ForeignersIllustration";
import HealthIllustration from "../Illustrations/HealthIllustration";
import HomeIllustration from "../Illustrations/HomeIllustration";
import HostingIllustration from "../Illustrations/HostingIllustration";
import JobsIllustration from "../Illustrations/JobsIllustration";
import MinorsIllustration from "../Illustrations/MinorsIllustration";
import { useGlobalContext } from "~/Contexts/globalContext";
import {
  CategoriesWrapperBorne,
  CategoriesWrapperMobile,
  CategoriesCardColumnsMobile,
  CategoriesCardColumnsBorne
} from "~/Views/FAQ/FAQCategoryCardsWrapper/styles";

export default function FAQCategoryCardsWrapper() {
  const { t } = useTranslation();
  const { isMobile } = useGlobalContext();

  const CategoriesWrapper = (
    isMobile ? CategoriesWrapperMobile : CategoriesWrapperBorne
  ) as React.ElementType;

  const CategoriesCardColumns = (
    isMobile ? CategoriesCardColumnsMobile : CategoriesCardColumnsBorne
  ) as React.ElementType;

  return (
    <CategoriesWrapper>
      <CategoriesCardColumns>
        <FAQCategoryCard
          illustration={<HostingIllustration />}
          category="hosting"
        />
        <FAQCategoryCard illustration={<HomeIllustration />} category="home" />
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
        <FAQCategoryCard illustration={<JobsIllustration />} category="job" />
        <FAQCategoryCard
          illustration={<MinorsIllustration />}
          category="minors"
        />
      </CategoriesCardColumns>
    </CategoriesWrapper>
  );
}
