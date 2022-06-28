import DisconnectIllustration from "./DisconnectIllustration";
import HeartIllustration from "./HeartIllustration";
import PagePlusBorneIllustration from "./pagePlusBorneIllustration";
import SafeIllustration from "./SafeIllustration";
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
  PagePlusBorneIllustrationWrapper,
  ButtonWrapperBorne,
  ButtonWrapperMobile,
  ConnectedIllustrationsWrapper,
  ConnectedIllustrationWrapper
} from "./styles";
import TakeNotesIllustration from "./TakeNotesIllustration";
import Comment from "~/Components/Icons/System/Communication/Comment";
import File from "~/Components/Icons/System/File/File";
import Building from "~/Components/Icons/System/Map/Building";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const isConnected = true;

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
    { title: "Disconnected", illustration: <DisconnectIllustration /> }
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
            <Text
              type="paragraph"
              color="black20"
              textAlign={isMobile ? "left" : "center"}
            >
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
                    <Building
                      width={14}
                      height={17}
                      color={theme.color.primary.white}
                    />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Orienter toutes les personnes en situation difficile vers
                    les structures qui pourraient les aider.
                  </Text>
                </TextMissionsPlusWrapper>
                <TextMissionsPlusWrapper>
                  <LogoWrappers>
                    <File
                      width={12}
                      height={17}
                      color={theme.color.primary.white}
                    />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Mettre à disposition un outil ouvert à tous, ergonomique,
                    simple et rapide d’utilisation.
                  </Text>
                </TextMissionsPlusWrapper>
                <TextMissionsPlusWrapper>
                  <LogoWrappers>
                    <Comment
                      width={17}
                      height={15}
                      color={theme.color.primary.white}
                    />
                  </LogoWrappers>
                  <Text type="paragraph" color="black40">
                    Permettre l’accès à un espace privé contenant un coffre fort
                    numérique et la liste de vos lieux favoris.
                  </Text>
                </TextMissionsPlusWrapper>
              </>
            )}
            <ButtonsContainer>
              <Button text="Se connecter" fullWidth={isMobile} />
              <ButtonWrapper>
                <Button
                  type={isMobile ? "tertiary" : "secondary"}
                  text="S'inscrire"
                  fullWidth={isMobile}
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
                      <TextPlusWrapper
                        marginTop={index !== 0 ? 16 : 0}
                        key={content.title}
                      >
                        <Text type="paragraph" color="grey">
                          {content.title}
                        </Text>
                      </TextPlusWrapper>
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
        >
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
            columnWidth={isMobile ? 22 : 4}
            /** TODO aligner séparateur */
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
