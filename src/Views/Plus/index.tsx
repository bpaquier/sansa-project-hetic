import { useTranslation } from "react-i18next/";
import { Dimensions } from "react-native";

import {
  PageWrapperMobile,
  PageWrapperSmallBorne,
  PageWrapperBigBorne,
  PlusContainersBorne,
  PlusContainersMobile,
  PagePlusBorneIllustrationWrapper,
  TopContainersBorne,
  TopContainersMobile
} from "./styles";
import PageContentWrapper from "~/Components/PageContentWrapper";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import { getColumnWidth } from "~/Styles/mixins.styles";
import theme from "~/Styles/theme.styles";
import AdministrativeHelpSection from "~/Views/Plus/AdministrativeHelpSection";
import PagePlusBorneIllustration from "~/Views/Plus/Illustrations/PagePlusBorneIllustration";
import PlusSection from "~/Views/Plus/PlusSection";
import SansaDescriptionConnected from "~/Views/Plus/SansaDescriptionConnected";
import SansaDescriptionNotConnected from "~/Views/Plus/SansaDescriptionNotConnected";

const isConnected = false;

export default function Plus(): JSX.Element {
  const { isMobile } = useGlobalContext();
  const { t } = useTranslation();
  const isSmallBorne = Dimensions.get("window").width < 1200;

  const PageWrapperBorne = (
    isSmallBorne ? PageWrapperSmallBorne : PageWrapperBigBorne
  ) as React.ElementType;

  const PageWrapper = (
    isMobile ? PageWrapperMobile : PageWrapperBorne
  ) as React.ElementType;

  const PlusContainers = (
    isMobile ? PlusContainersMobile : PlusContainersBorne
  ) as React.ElementType;

  const TopContainers = (
    isMobile ? TopContainersMobile : TopContainersBorne
  ) as React.ElementType;

  return (
    <PageContentWrapper>
      <>
        <PageWrapper>
          {isMobile && (
            <TextWrapper
              marginBottom={16}
              type="titleL"
              textAlign="left"
              color="black40"
              marginLeft={3}
            >
              {t("plus.plus")}
            </TextWrapper>
          )}
          <TopContainers isFlex>
            <PlusContainers
              style={theme.boxShadow.panelAndroid}
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
              paddingX={0}
              paddingTop={0}
              paddingBottom={0}
              style={theme.boxShadow.panelAndroid}
              border
              columnWidth={!isMobile && 7}
              marginBottom={isMobile}
              height={isMobile ? 300 : 260}
            >
              <AdministrativeHelpSection />
            </PlusContainers>
          </TopContainers>
          <TopContainers>
            <PlusContainers
              style={theme.boxShadow.panelAndroid}
              paddingTop={24}
              paddingX={24}
              paddingBottom={28}
              columnWidth={!isMobile && 6}
            >
              <PlusSection isMobile={isMobile} isConnected={isConnected} />
            </PlusContainers>
          </TopContainers>
        </PageWrapper>
        {!isMobile && (
          <PagePlusBorneIllustrationWrapper style={{ elevation: -1 }}>
            <PagePlusBorneIllustration width={getColumnWidth(12, false)} />
          </PagePlusBorneIllustrationWrapper>
        )}
      </>
    </PageContentWrapper>
  );
}
