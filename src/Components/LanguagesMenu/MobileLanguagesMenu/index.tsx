import { useTranslation } from "react-i18next";
import { ViewProps } from "react-native";

import ArrowLeft from "../../Icons/System/Arrows/ArrowLeft";
import PageContentWrapper from "../../PageContentWrapper";
import TextWrapper from "../../Ui-kit/TextWrapper";
import { MenuMobile, TitleWrapper, WrapperMobileMenu } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function LanguagesMenuMobile({
  children
}: ViewProps): JSX.Element {
  const { t } = useTranslation();
  const { setMenuLanguagesOpen } = useGlobalContext();

  return (
    <WrapperMobileMenu>
      <PageContentWrapper>
        <>
          <TitleWrapper
            onPress={() => setMenuLanguagesOpen && setMenuLanguagesOpen()}
          >
            <ArrowLeft height={28} width={28} />
            <TextWrapper marginLeft={14} color="black40" type="titleL">
              {t("plus.languages")}
            </TextWrapper>
          </TitleWrapper>
          <MenuMobile>{children}</MenuMobile>
        </>
      </PageContentWrapper>
    </WrapperMobileMenu>
  );
}
