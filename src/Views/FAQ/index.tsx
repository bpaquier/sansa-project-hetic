import React from "react";

import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import ChevrontRight from "~/Components/Icons/System/Arrows/ChevronRight";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import theme from "~/Styles/theme.styles";
import {
  Breadcrumb,
  FrequentQuestionCategoryDecoration,
  FrequentQuestionCategoryWrapper,
  FrequentQuestionContainer,
  FrequentQuestionTexts,
  PageContainerMobile,
  SectionsContainers,
  TitleWrapper
} from "~/Views/FAQ/styles";

export default function FAQ() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PageContentWrapper noPaddingX backgroundColor="white">
      <PageContainerMobile>
        <SectionsContainers>
          <Breadcrumb onPress={() => navigate("/plus")}>
            <ArrowLeft height={28} width={28} />
            <TextWrapper marginLeft={14} color="black20" type="titleL">
              {t("administrativeAssistance.administrativeAssistance")}
            </TextWrapper>
          </Breadcrumb>
        </SectionsContainers>
        <TitleWrapper>
          <TextWrapper color="white" type="titleXL">
            Sansa répond à vos questions
          </TextWrapper>
        </TitleWrapper>
        <SectionsContainers>
          <TextWrapper type="titleL" marginTop={24}>
            Rechercher par catégories :
          </TextWrapper>
          <TextWrapper type="titleM" marginTop={24} marginBottom={24}>
            Questions les plus fréquemment posées:
          </TextWrapper>
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue"> 1 Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue"> 2 Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue">Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue">Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
        </SectionsContainers>
      </PageContainerMobile>
    </PageContentWrapper>
  );

  {
    /* <View style={{ flex: 1 }}>
      <ScrollView style={{ height: "100%", minHeight: "100%" }}>
        <View>
          <Breadcrumb onPress={() => navigate("/plus")}>
            <ArrowLeft height={28} width={28} />
            <TextWrapper marginLeft={14} color="black20" type="titleL">
              {t("administrativeAssistance.administrativeAssistance")}
            </TextWrapper>
          </Breadcrumb>
        </PageWrapperMobile>
        <TitleWrapper>
          <TextWrapper color="white" type="titleXL">
            Sansa répond à vos questions
          </TextWrapper>
        </TitleWrapper>
        <PageWrapperMobile>
          <TextWrapper type="titleL" marginTop={24}>
            Rechercher par catégories :
          </TextWrapper>
          <TextWrapper type="titleM" marginTop={24} marginBottom={24}>
            Questions les plus fréquemment posées:
          </TextWrapper>
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue"> 1 Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue"> 2 Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue">Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
          <Separator orientation="horizontal" margin={24} columnWidth={6} />
          <FrequentQuestionContainer>
            <FrequentQuestionTexts>
              <FrequentQuestionCategoryWrapper>
                <FrequentQuestionCategoryDecoration />
                <TextWrapper color="blue">Hébergement</TextWrapper>
              </FrequentQuestionCategoryWrapper>
              <TextWrapper color="grey" marginTop={8}>
                Comment faire pour avoir un hébergement ?
              </TextWrapper>
            </FrequentQuestionTexts>
            <ChevrontRight color={theme.color.primary.blue} width={16} />
          </FrequentQuestionContainer>
        </PageWrapperMobile>
      </ScrollView>
    </View> */
  }
}
