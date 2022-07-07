import React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import theme from "~/Styles/theme.styles";
import { CategoriesCard } from "~/Views/FAQ/FAQCategoryCard/styles";

type FAQCategoryCardProps = {
  illustration: JSX.Element;
  category: string;
};

export default function FAQCategoryCard({
  illustration,
  category
}: FAQCategoryCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CategoriesCard
      activeOpacity={0.7}
      style={theme.boxShadow.panelAndroid}
      onPress={() => navigate(`/faq/${category}`)}
    >
      {illustration}
      <TextWrapper textAlign="center" marginTop={16}>
        {t(`administrativeAssistance.${category}.${category}`)}
      </TextWrapper>
    </CategoriesCard>
  );
}
