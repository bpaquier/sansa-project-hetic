import SpotlightHelpIllustration from "./spotlightHelpIllustration";
import {
  ButtonsContainerMobile,
  PageWrapper,
  PageWrapperBorne,
  TitleWrapper,
  PlusContainers,
  ImageWrapper,
  TextPlusWrapper
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const isConnected = true;

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  const plusContent = [
    { title: "Nous contacter" },
    { title: "Langues" },
    { title: "Politique de confidentialité" },
    { title: "Mentions légales" },
    { title: "CGU" }
  ];

  const connectedContent = [
    { title: "Mes notes" },
    { title: "Coffre-fort numérique" },
    { title: "Mes lieux favoris" }
  ];

  return (
    <PageContentWrapper>
      <GlobalWrapper>
        {isMobile && (
          <TitleWrapper marginBottom={16}>
            <Text type="titleL" textAlign="left" color="black20">
              Plus
            </Text>
          </TitleWrapper>
        )}
        {!isConnected && (
          <PlusContainers marginBottom paddingTop>
            <TitleWrapper marginBottom={8}>
              <Text type="titleL">SANSA</Text>
            </TitleWrapper>
            <Text type="paragraph" color="black20">
              Sansa c’est la plateforme qui référence les lieux et les services
              utiles aux personnes en difficultés.
            </Text>
            <ButtonsContainerMobile>
              <Button text="Se connecter" fullWidth={isMobile} />
              <Button type="tertiary" text="S'inscrire" fullWidth={isMobile} />
            </ButtonsContainerMobile>
          </PlusContainers>
        )}
        {isConnected && (
          <PlusContainers marginBottom paddingTop>
            <Text type="titleL">Bonjour Timothé !</Text>
            {connectedContent.map((content) => {
              return (
                <TextPlusWrapper key={content.title}>
                  <Text type="paragraph" color="grey">
                    {content.title}
                  </Text>
                </TextPlusWrapper>
              );
            })}
          </PlusContainers>
        )}
        <PlusContainers border marginBottom>
          <Text type="paragraph" color="black20">
            Consulter la liste
          </Text>
          <Text type="titleL">Aides administratives</Text>
          <ImageWrapper>
            <SpotlightHelpIllustration />
          </ImageWrapper>
        </PlusContainers>
        <PlusContainers paddingTop>
          <Text type="titleL">Plus</Text>
          {plusContent.map((content) => {
            return (
              <TextPlusWrapper
                onPress={() => console.log("add a link")}
                key={content.title}
              >
                <Text type="paragraph" color="grey">
                  {content.title}
                </Text>
              </TextPlusWrapper>
            );
          })}
        </PlusContainers>
      </GlobalWrapper>
    </PageContentWrapper>
  );
}
