import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { Animated, Easing } from "react-native";

import Arabic from "../Icons/Flags/Arabic";
import English from "../Icons/Flags/English";
import France from "../Icons/Flags/France";
import Spain from "../Icons/Flags/Spain";
import Ukraine from "../Icons/Flags/Ukraine";
import TextWrapper from "../Ui-kit/TextWrapper";
import BorneLanguagesMenu from "./BorneLanguagesMenu";
import LanguagesMenuMobile from "./MobileLanguagesMenu";
import { LanguagesItemMenu } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";
import { LanguagesType } from "~/locales/i18n";

const languagesList: {
  id: LanguagesType;
  text: string;
  flag: React.ElementType;
}[] = [
  {
    id: "fr-FR",
    text: "Français",
    flag: France
  },
  {
    id: "en-EN",
    text: "English",
    flag: English
  },
  {
    id: "ar-SA",
    text: "يبرع",
    flag: Arabic
  },
  {
    id: "es-ES",
    text: "Español",
    flag: Spain
  },
  {
    id: "uk-UA",
    text: "Українська",
    flag: Ukraine
  }
];

export default function LanguagesMenu(): JSX.Element {
  const { i18n } = useTranslation();
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

  const LanguagesItemsMenu = ({ size }: { size: number }): JSX.Element => (
    <>
      {languagesList.map((language) => (
        <LanguagesItemMenu
          key={language.id}
          activeOpacity={0.7}
          isActive={isActive === language.id}
          onPress={() => handleChooseLanguage(language.id)}
        >
          <language.flag width={size} height={size} />
          <TextWrapper marginLeft={15.5}>{language.text}</TextWrapper>
        </LanguagesItemMenu>
      ))}
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
