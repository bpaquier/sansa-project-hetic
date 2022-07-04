import { useEffect, useRef } from "react";

import { Animated, Easing, ViewProps } from "react-native";

import { BackgroundLayer, MenuBorne } from "./styles";
import { useGlobalContext } from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";

export default function BorneLanguagesMenu({
  ...props
}: ViewProps): JSX.Element {
  const { isMenuLanguagesOpen, setMenuLanguagesOpen } = useGlobalContext();

  const backgroundAnimationValueHolder = useRef(
    new Animated.Value(isMenuLanguagesOpen ? 1 : 0)
  ).current;

  const backgroundColorAnimation = backgroundAnimationValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "hsla(0, 0%, 0%, 0.2)"]
  });

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

  return (
    <BackgroundLayer onPress={handleCloseBackground} style={{ elevation: 2 }}>
      <Animated.View style={animationStyle}>
        <MenuBorne style={{ ...theme.boxShadow.panelAndroid }}>
          {props.children}
        </MenuBorne>
      </Animated.View>
    </BackgroundLayer>
  );
}
