import {
  PageWrapperMobile,
  PageWrapperBorne,
  PlusContainersBorne,
  PlusContainersMobile,
  PagePlusBorneIllustrationWrapper
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import AdministrativeHelpSection from "~/Views/Plus/AdministrativeHelpSection";
import PagePlusBorneIllustration from "~/Views/Plus/Illustrations/PagePlusBorneIllustration";
import PlusSection from "~/Views/Plus/PlusSection";
import SansaDescriptionConnected from "~/Views/Plus/SansaDescriptionConnected";
import SansaDescriptionNotConnected from "~/Views/Plus/SansaDescriptionNotConnected";

const isConnected = true;

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const PageWrapper = (
    isMobile ? PageWrapperMobile : PageWrapperBorne
  ) as React.ElementType;

  const PlusContainers = (
    isMobile ? PlusContainersMobile : PlusContainersBorne
  ) as React.ElementType;

  const shadows = {
    shadowColor: "#242424",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2
  };

  return (
    <PageContentWrapper>
      <PageWrapper>
        {isMobile && (
          <TextWrapper
            marginBottom={16}
            type="titleL"
            textAlign="left"
            color="black20"
          >
            Plus
          </TextWrapper>
        )}
        <PlusContainers
          style={shadows}
          marginBottom
          columnWidth={!isMobile && 10}
        >
          {isConnected ? (
            <SansaDescriptionConnected isMobile={isMobile} />
          ) : (
            <SansaDescriptionNotConnected isMobile={isMobile} />
          )}
        </PlusContainers>
        <PlusContainers
          style={shadows}
          border
          columnWidth={!isMobile && 7}
          adminHelp
          marginBottom={isMobile}
          height={325}
        >
          <AdministrativeHelpSection />
        </PlusContainers>
        <PlusContainers
          style={shadows}
          paddingTop={24}
          paddingX={24}
          paddingBottom={28}
          columnWidth={!isMobile && 5}
        >
          <PlusSection isMobile={isMobile} isConnected={isConnected} />
        </PlusContainers>
        {!isMobile && (
          <PagePlusBorneIllustrationWrapper>
            <PagePlusBorneIllustration />
          </PagePlusBorneIllustrationWrapper>
        )}
      </PageWrapper>
    </PageContentWrapper>
  );
}
