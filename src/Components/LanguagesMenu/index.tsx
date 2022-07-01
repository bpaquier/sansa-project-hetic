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
import theme from "~/Styles/theme.styles";

export default function LanguagesMenu(): JSX.Element | undefined {
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
      <BackgroundLayer
        onPress={() => setMenuLanguagesOpen && setMenuLanguagesOpen()}
        style={{ elevation: 2 }}
      >
        <Animated.View
          style={[
            {
              width: "100%",
              height: "100%",
              backgroundColor: backgroundColorAnimation
            }
          ]}
        >
          <Menu style={{ ...theme.boxShadow.panelAndroid }}>
            <LanguagesItemMenu
              activeOpacity={0.7}
              isActive={isActive === "fr-FR"}
              onPressOut={() => {
                i18n.changeLanguage("fr-FR");
                setMenuLanguagesOpen && setMenuLanguagesOpen();
              }}
            >
              <France width={27} height={27} />
              <TextWrapper marginLeft={15.5}>Français</TextWrapper>
            </LanguagesItemMenu>
            <LanguagesItemMenu
              activeOpacity={0.7}
              isActive={isActive === "en-EN"}
              onPressOut={() => {
                i18n.changeLanguage("en-EN");
                setMenuLanguagesOpen && setMenuLanguagesOpen();
              }}
            >
              <English width={27} height={27} />
              <TextWrapper marginLeft={15.5}>English</TextWrapper>
            </LanguagesItemMenu>
            <LanguagesItemMenu
              activeOpacity={0.7}
              isActive={isActive === "ar-SA"}
              onPressOut={() => {
                i18n.changeLanguage("ar-SA");
                setMenuLanguagesOpen && setMenuLanguagesOpen();
              }}
            >
              <Arabic width={27} height={27} />
              <TextWrapper marginLeft={15.5}>يبرع</TextWrapper>
            </LanguagesItemMenu>
            <LanguagesItemMenu
              activeOpacity={0.7}
              isActive={isActive === "es-ES"}
              onPressOut={() => {
                i18n.changeLanguage("es-ES");
                setMenuLanguagesOpen && setMenuLanguagesOpen();
              }}
            >
              <Spain width={27} height={27} />
              <TextWrapper marginLeft={15.5}>Español</TextWrapper>
            </LanguagesItemMenu>
            <LanguagesItemMenu
              activeOpacity={0.7}
              isActive={isActive === "uk-UA"}
              onPressOut={() => {
                i18n.changeLanguage("uk-UA");
                setMenuLanguagesOpen && setMenuLanguagesOpen();
              }}
            >
              <Ukraine width={27} height={27} />
              <TextWrapper marginLeft={15.5}>Українська</TextWrapper>
            </LanguagesItemMenu>
          </Menu>
        </Animated.View>
      </BackgroundLayer>
    </>
  ) : (
    <></>
  );
}
