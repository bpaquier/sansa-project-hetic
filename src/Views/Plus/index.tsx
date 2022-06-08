import {
  ButtonsContainerMobile,
  PageWrapper,
  PageWrapperBorne,
  SansaDescriptionContainer,
  TitleWrapper
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const isConnected = false;

  const GlobalWrapper = (
    isMobile ? PageWrapper : PageWrapperBorne
  ) as React.ElementType;

  return (
    <PageContentWrapper>
      <GlobalWrapper>
        <TitleWrapper marginBottom={16}>
          <Text type="titleL" textAlign="left" color="black20">
            Plus
          </Text>
        </TitleWrapper>
        {!isConnected && (
          <SansaDescriptionContainer>
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
          </SansaDescriptionContainer>
        )}
      </GlobalWrapper>
    </PageContentWrapper>
  );
}
