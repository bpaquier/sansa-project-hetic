import { useNavigate } from "react-router-native";

import AdministrativeHelpSection from "./AdministrativeHelpSection";
import DisconnectIllustration from "./Illustrations/DisconnectIllustration";
import HeartIllustration from "./Illustrations/HeartIllustration";
import PagePlusBorneIllustration from "./Illustrations/PagePlusBorneIllustration";
import SafeIllustration from "./Illustrations/SafeIllustration";
import TakeNotesIllustration from "./Illustrations/TakeNotesIllustration";
import PlusSection from "./PlusSection";
import SansaBorneDescription from "./SansaBorneDescription";
import {
  ButtonsContainerMobile,
  PageWrapper,
  PageWrapperBorne,
  PlusContainersBorne,
  PlusContainersMobile,
  ButtonsContainerBorne,
  PagePlusBorneIllustrationWrapper,
  ButtonWrapperBorne,
  ButtonWrapperMobile,
  ConnectedIllustrationsWrapper,
  ConnectedIllustrationWrapper
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();
  const navigate = useNavigate();

  const isConnected = false;

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  const PlusContainers = (
    isMobile ? PlusContainersMobile : PlusContainersBorne
  ) as React.ElementType;

  const ButtonsContainer = (
    isMobile ? ButtonsContainerMobile : ButtonsContainerBorne
  ) as React.ElementType;

  const ButtonWrapper = (
    isMobile ? ButtonWrapperMobile : ButtonWrapperBorne
  ) as React.ElementType;

  const connectedContent = [
    { title: "Nouvelle note", illustration: <TakeNotesIllustration /> },
    { title: "Coffre-fort numérique", illustration: <SafeIllustration /> },
    { title: "Mes lieux favoris", illustration: <HeartIllustration /> },
    { title: "Se déconnecter", illustration: <DisconnectIllustration /> }
  ];

  return (
    <PageContentWrapper>
      <GlobalWrapper>
        {isMobile && (
          <TextWrapper
            marginBottom={16}
            type="titleL"
            textAlign="left"
            color="black20"
            title="Plus"
          />
        )}
        {!isConnected && (
          <PlusContainers marginBottom columnWidth={!isMobile && 10}>
            <TextWrapper
              marginBottom={8}
              type="titleL"
              textAlign={isMobile ? "left" : "center"}
              title={isMobile ? "SANSA" : "SANSA, c'est quoi ?"}
            />
            <Text
              type="paragraph"
              color="black20"
              textAlign={isMobile ? "left" : "center"}
            >
              Sansa c’est la plateforme qui référence les lieux et les services
              utiles aux personnes en difficultés.
            </Text>
            {!isMobile && <SansaBorneDescription />}
            <ButtonsContainer>
              <Button
                text="Se connecter"
                fullWidth={isMobile}
                onPress={() => navigate("/login")}
              />
              <ButtonWrapper>
                <Button
                  type={isMobile ? "tertiary" : "secondary"}
                  text="S'inscrire"
                  fullWidth={isMobile}
                  onPress={() => navigate("/register")}
                />
              </ButtonWrapper>
            </ButtonsContainer>
          </PlusContainers>
        )}
        {isConnected && (
          <PlusContainers marginBottom columnWidth={!isMobile && 10}>
            <Text type={isMobile ? "titleL" : "titleM"}>Bonjour Timothé !</Text>
            {isMobile && (
              <>
                <Separator
                  orientation="horizontal"
                  columnWidth={22}
                  margin={16}
                />
                {connectedContent.map(
                  (content, index) =>
                    index !== connectedContent.length && (
                      <TextWrapper
                        link
                        to="#"
                        marginTop={index !== 0 ? 16 : 0}
                        key={content.title}
                        type="paragraph"
                        color="grey"
                        title={content.title}
                      />
                    )
                )}
              </>
            )}
            {!isMobile && (
              <ConnectedIllustrationsWrapper>
                {connectedContent.map((content, index) => {
                  const isDisabled = connectedContent.length - 1 !== index;
                  return (
                    <ConnectedIllustrationWrapper
                      onPress={() => {
                        //TODO
                      }}
                      key={content.title}
                    >
                      {content.illustration}
                      <Text
                        type="paragraph"
                        weight="bold"
                        color={isDisabled ? "black40" : "black"}
                      >
                        {content.title}
                      </Text>
                    </ConnectedIllustrationWrapper>
                  );
                })}
              </ConnectedIllustrationsWrapper>
            )}
          </PlusContainers>
        )}
        <PlusContainers
          border
          columnWidth={!isMobile && 7}
          adminHelp
          marginBottom={isMobile}
          height={325}
        >
          <AdministrativeHelpSection />
        </PlusContainers>
        <PlusContainers
          paddingTop={24}
          paddingX={24}
          paddingBottom={28}
          columnWidth={!isMobile && 5}
        >
          <PlusSection isMobile={isMobile} />
        </PlusContainers>
        {!isMobile && (
          <PagePlusBorneIllustrationWrapper>
            <PagePlusBorneIllustration />
          </PagePlusBorneIllustrationWrapper>
        )}
      </GlobalWrapper>
    </PageContentWrapper>
  );
}
