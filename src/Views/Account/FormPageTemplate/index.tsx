/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactNode } from "react";

import { useNavigate } from "react-router-native";

import {
  PageWrapper,
  BackButtonMobile,
  BackButtonBorne,
  ImageWrapperMobile,
  ImageWrapperBorne,
  PageWrapperBorne,
  PageContent,
  PageContentBorne,
  FormWrapperMobile,
  FormWrapperBorne
} from "./styles";
import ArrowLeft from "~/Components/Icons/System/Arrows/ArrowLeft";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface FormPageTemplateProps {
  image: ReactNode;
  form: ReactNode;
  backArrow?: boolean;
}

export default function FormPageTemplate({
  image,
  form,
  backArrow = false
}: FormPageTemplateProps): JSX.Element {
  const { isMobile } = useGlobalContext();
  const navigate = useNavigate();

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  const Content = (
    isMobile ? PageContent : PageContentBorne
  ) as React.ElementType;

  const BackButton = (
    isMobile ? BackButtonMobile : BackButtonBorne
  ) as React.ElementType;

  const FormWrapper = (
    isMobile ? FormWrapperMobile : FormWrapperBorne
  ) as React.ElementType;

  const ImageWrapper = (
    isMobile ? ImageWrapperMobile : ImageWrapperBorne
  ) as React.ElementType;

  return (
    <GlobalWrapper>
      <Content>
        {backArrow && (
          <BackButton onPress={() => navigate(-1)}>
            <ArrowLeft width={isMobile ? 32 : 24} height={isMobile ? 32 : 24} />
          </BackButton>
        )}
        <FormWrapper>{form}</FormWrapper>
        <ImageWrapper>{image}</ImageWrapper>
      </Content>
    </GlobalWrapper>
  );
}
