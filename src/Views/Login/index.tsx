/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { Image } from "react-native";
import { useNavigate } from "react-router-native";

import {
  PageWrapper,
  ImageWrapperMobile,
  ImageWrapperBorne,
  BottomText,
  PageWrapperBorne,
  PageContent,
  PageContentBorne,
  FormWrapperMobile,
  FormWrapperBorne,
  ContentWrapperBorne,
  ContentWrapperMobile
} from "./styles";
import Form from "~/Components/Form";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { ImageStyle } from "~/Styles/mixins.styles";

export default function Login(): JSX.Element {
  const { isMobile } = useGlobalContext();
  const navigate = useNavigate();

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
          <ImageWrapper>
            <Image
              style={ImageStyle.image}
              source={require("~/../assets/images/Team_success_TwoColor.png")}
            />
          </ImageWrapper>
          <FormWrapper>
            <Form
              title="Se connecter"
              submitCtaLabel="Se connecter"
              inlineCtaLabel="Mot de passe oublié"
              items={[
                {
                  placeholder: "johndoe@gmail.com",
                  label: "Votre email ou indentifiant",
                  name: "ID",
                  required: true
                },
                {
                  label: "Votre mot de passe",
                  name: "password",
                  type: "password",
                  required: true
                }
              ]}
            />
            <BottomText>
              <Text color="black40" textAlign="center">
                Pas encore de compte?
              </Text>
            </BottomText>
            <Button
              text="S'incrire"
              type="tertiary"
              onPress={() => navigate("/")}
            />
          </FormWrapper>
        </ContentWrapper>
      </Content>
    </GlobalWrapper>
  );
}
