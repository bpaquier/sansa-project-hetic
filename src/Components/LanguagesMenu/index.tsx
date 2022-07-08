import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { Animated, Easing } from "react-native";
import { useLocation } from "react-router-native";

import Arabic from "../Icons/Flags/Arabic";
import English from "../Icons/Flags/English";
import France from "../Icons/Flags/France";
import Spain from "../Icons/Flags/Spain";
import Ukraine from "../Icons/Flags/Ukraine";
import TextWrapper from "../Ui-kit/TextWrapper";
import BorneLanguagesMenu from "./BorneLanguagesMenu";
import LanguagesMenuMobile from "./MobileLanguagesMenu";
import { LanguagesItemMenu, TextContainerLanguages } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";
import { LanguagesType } from "~/locales/i18n";

const languagesList: {
  id: LanguagesType;
  text: string;
  Flag: React.ElementType;
}[] = [
  {
    id: "fr-FR",
    text: "Français",
    Flag: France
  },
  {
    id: "en-EN",
    text: "English",
    Flag: English
  },
  {
    id: "ar-SA",
    text: "يبرع",
    Flag: Arabic
  },
  {
    id: "es-ES",
    text: "Español",
    Flag: Spain
  },
  {
    id: "uk-UA",
    text: "Українська",
    Flag: Ukraine
  }
];

export default function LanguagesMenu(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(i18n.language);
  const { isMenuLanguagesOpen, setMenuLanguagesOpen, isMobile } =
    useGlobalContext();

  const backgroundAnimationValueHolder = useRef(
    new Animated.Value(isMenuLanguagesOpen ? 1 : 0)
  ).current;

  useEffect(() => {
    setIsActive(i18n.language);
  }, [i18n.language]);

  const handleChooseLanguage = (language: LanguagesType) => {
    i18n.changeLanguage(language);
    setMenuLanguagesOpen && setMenuLanguagesOpen();
  };

  useEffect(() => {
    isMenuLanguagesOpen &&
      Animated.timing(backgroundAnimationValueHolder, {
        toValue: 1,
        duration: 80,
        useNativeDriver: false,
        easing: Easing.linear
      }).start();

    !isMenuLanguagesOpen &&
      Animated.timing(backgroundAnimationValueHolder, {
        toValue: 0,
        duration: 80,
        useNativeDriver: false,
        easing: Easing.linear
      }).start();
  }, [backgroundAnimationValueHolder, isMenuLanguagesOpen]);

  const { pathname } = useLocation();

  const LanguagesItemsMenu = ({ size }: { size: number }): JSX.Element => (
    <>
      {languagesList.map(({ id, text, Flag }) => {
        const isDisabled = id === "ar-SA" && pathname.startsWith("/faq");
        return (
          <LanguagesItemMenu
            key={id}
            activeOpacity={isDisabled ? 1 : 0.7}
            isActive={isActive === id}
            onPress={() => !isDisabled && handleChooseLanguage(id)}
          >
            <Flag width={size} height={size} disabled={isDisabled} />
            <TextContainerLanguages>
              <TextWrapper
                marginLeft={15.5}
                color={isDisabled ? "black20" : "black"}
              >
                {text}
              </TextWrapper>
              {isDisabled && (
                <TextWrapper marginLeft={15.5} color="black20">
                  {t("common.unavailableForThisFeature")}
                </TextWrapper>
              )}
            </TextContainerLanguages>
          </LanguagesItemMenu>
        );
      })}
    </>
  );

  return isMenuLanguagesOpen ? (
    isMobile ? (
      <LanguagesMenuMobile>
        <LanguagesItemsMenu size={36} />
      </LanguagesMenuMobile>
    ) : (
      <BorneLanguagesMenu>
        <LanguagesItemsMenu size={27} />
      </BorneLanguagesMenu>
    )
  ) : (
    <></>
  );
}
