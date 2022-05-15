/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactNode } from "react";

import {
  PageWrapper,
  ImageWrapperMobile,
  ImageWrapperBorne,
  PageWrapperBorne,
  PageContent,
  PageContentBorne,
  FormWrapperMobile,
  FormWrapperBorne,
  ContentWrapperBorne,
  ContentWrapperMobile
} from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface FormPAgeTemplateProps {
  image: ReactNode;
  form: ReactNode;
}

export default function FormPageTemplate({
  image,
  form
}: FormPAgeTemplateProps): JSX.Element {
  const { isMobile } = useGlobalContext();

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  const Content = (
    isMobile ? PageContent : PageContentBorne
  ) as React.ElementType;

  const ContentWrapper = (
    isMobile ? ContentWrapperMobile : ContentWrapperBorne
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
        <ContentWrapper>
          <ImageWrapper>{image}</ImageWrapper>
          <FormWrapper>{form}</FormWrapper>
        </ContentWrapper>
      </Content>
    </GlobalWrapper>
  );
}
