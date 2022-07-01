import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { Animated, Easing } from "react-native";

import Arabic from "../Icons/Flags/Arabic";
import English from "../Icons/Flags/English";
import France from "../Icons/Flags/France";
import Spain from "../Icons/Flags/Spain";
import Ukraine from "../Icons/Flags/Ukraine";
import TextWrapper from "../Ui-kit/TextWrapper";
import { BackgroundLayer, LanguagesItemMenu, Menu } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";
import { LanguagesType } from "~/locales/i18n";
import theme from "~/Styles/theme.styles";

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
  const { isMenuLanguagesOpen, setMenuLanguagesOpen } = useGlobalContext();

  const backgroundAnimationValueHolder = useRef(
    new Animated.Value(isMenuLanguagesOpen ? 1 : 0)
  ).current;

  const backgroundColorAnimation = backgroundAnimationValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "hsla(0, 0%, 0%, 0.2)"]
  });

  useEffect(() => {
    setIsActive(i18n.language);
  }, [i18n.language]);

  const handleChooseLanguage = (language: LanguagesType) => {
    i18n.changeLanguage(language);
    setMenuLanguagesOpen && setMenuLanguagesOpen();
  };

  const handleCloseBackground = () =>
    setMenuLanguagesOpen && setMenuLanguagesOpen();

  const animationStyle = [
    {
      width: "100%",
      height: "100%",
      backgroundColor: backgroundColorAnimation
    }
  ];

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

  return isMenuLanguagesOpen ? (
    <>
      <BackgroundLayer onPress={handleCloseBackground} style={{ elevation: 2 }}>
        <Animated.View style={animationStyle}>
          <Menu style={{ ...theme.boxShadow.panelAndroid }}>
            {languagesList.map((language) => (
              <LanguagesItemMenu
                key={language.id}
                activeOpacity={0.7}
                isActive={isActive === language.id}
                onPressOut={() => handleChooseLanguage(language.id)}
              >
                <language.flag width={27} height={27} />
                <TextWrapper marginLeft={15.5}>{language.text}</TextWrapper>
              </LanguagesItemMenu>
            ))}
          </Menu>
        </Animated.View>
      </BackgroundLayer>
    </>
  ) : (
    <></>
  );
}
