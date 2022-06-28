import BuildingIllustration from "./buildingIllustration";
import CommentIllustration from "./commentIllustration";
import FileIllustration from "./fileIllustration";
import PagePlusBorneIllustration from "./pagePlusBorneIllustration";
import SpotlightHelpIllustration from "./spotlightHelpIllustration";
import {
  ButtonsContainerMobile,
  PageWrapper,
  PageWrapperBorne,
  TitleWrapper,
  PlusContainersBorne,
  ImageWrapper,
  TextPlusWrapper,
  PlusContainersMobile,
  ButtonsContainerBorne,
  LogoWrappers,
  TextMissionsPlusWrapper,
  PagePlusBorneIllustrationWrapper
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const isConnected = false;

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  const PlusContainers = (
    isMobile ? PlusContainersMobile : PlusContainersBorne
  ) as React.ElementType;

  const ButtonContainer = (
    isMobile ? ButtonsContainerMobile : ButtonsContainerBorne
  ) as React.ElementType;

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
          <PlusContainers marginBottom columnWidth={!isMobile && 10}>
            <TitleWrapper marginBottom={8}>
              {isMobile ? (
                <Text type="titleL">SANSA</Text>
              ) : (
                <Text textAlign="center" type="titleL">
                  {"SANSA, c'est quoi ?"}
                </Text>
              )}
            </TitleWrapper>
            <Text type="paragraph" color="black20" textAlign="center">
              Sansa c’est la plateforme qui référence les lieux et les services
              utiles aux personnes en difficultés.
            </Text>
            {!isMobile && (
              <>
                <TextPlusWrapper marginTop={32}>
                  <Text color="grey" textAlign="center" weight="bold">
                    Ses missions
                  </Text>
                </TextPlusWrapper>
                <TextMissionsPlusWrapper>
                  <LogoWrappers>
                    <BuildingIllustration />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Orienter toutes les personnes en situation difficile vers
                    les structures qui pourraient les aider.
                  </Text>
                </TextMissionsPlusWrapper>
                <TextMissionsPlusWrapper>
                  <LogoWrappers>
                    <FileIllustration />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Mettre à disposition un outil ouvert à tous, ergonomique,
                    simple et rapide d’utilisation.
                  </Text>
                </TextMissionsPlusWrapper>
                <TextMissionsPlusWrapper>
                  <LogoWrappers>
                    <CommentIllustration />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Permettre l’accès à un espace privé contenant un coffre fort
                    numérique et la liste de vos lieux favoris.
                  </Text>
                </TextMissionsPlusWrapper>
              </>
            )}
            <ButtonContainer>
              <Button text="Se connecter" fullWidth={isMobile} />
              <Button type="secondary" text="S'inscrire" fullWidth={isMobile} />
            </ButtonContainer>
          </PlusContainers>
        )}
        {isConnected && (
          <PlusContainers marginBottom paddingTop columnWidth={!isMobile && 5}>
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
        <PlusContainers border columnWidth={!isMobile && 7} adminHelp>
          <Text type="paragraph" color="black20">
            Consulter la liste
          </Text>
          <Text type="titleL">Aides administratives</Text>
          <ImageWrapper>
            <SpotlightHelpIllustration />
          </ImageWrapper>
        </PlusContainers>
        <PlusContainers
          paddingTop={24}
          paddingX={24}
          paddingBottom={28}
          columnWidth={!isMobile && 5}
        >
          <Text type="titleL">Plus</Text>
          <Separator
            orientation="horizontal"
            theme="dark"
            columnWidth={4}
            /** aligner séparateur */
            margin={16}
          />
          <Text type="paragraph" color="grey">
            Nous contacter
          </Text>
          {isMobile && (
            <TextPlusWrapper marginTop={16}>
              <Text type="paragraph" color="grey">
                Langue
              </Text>
            </TextPlusWrapper>
          )}
          <TextPlusWrapper marginTop={16}>
            <Text type="paragraph" color="grey">
              Politique de confidentialité
            </Text>
          </TextPlusWrapper>
          <TextPlusWrapper marginTop={16}>
            <Text type="paragraph" color="grey">
              Mention légales
            </Text>
          </TextPlusWrapper>
          <TextPlusWrapper marginTop={16}>
            <Text type="paragraph" color="grey">
              CGU
            </Text>
          </TextPlusWrapper>
        </PlusContainers>
        {!isMobile && !isConnected && (
          <PagePlusBorneIllustrationWrapper>
            <PagePlusBorneIllustration />
          </PagePlusBorneIllustrationWrapper>
        )}
      </GlobalWrapper>
    </PageContentWrapper>
  );
}
