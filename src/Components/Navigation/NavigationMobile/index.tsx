import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Animated, Dimensions } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import { Nav, NavButton, NavButtonText, PrimaryIconContainer } from "./styles";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import { useGlobalContext } from "~/Contexts/globalContext";
import Theme from "~/Styles/theme.styles";

export default function NavigationMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;
  const { setMenuLanguagesOpen } = useGlobalContext();

  const NavWidth = Dimensions.get("window").width;
  const NavIndicatorWidth = 60;
  const [NavIndicatorTranslate] = useState(new Animated.Value(0));
  const [NavIndicatorOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    const index = isCurrentPage("/home")
      ? 0
      : isCurrentPage("/plus")
      ? 2
      : isCurrentPage("/")
      ? 1
      : -1;

    if (index >= 0) {
      Animated.spring(NavIndicatorTranslate, {
        toValue: (index * NavWidth) / 3 + NavWidth / 6 - NavIndicatorWidth / 2,
        velocity: 10,
        useNativeDriver: true
      }).start();
    }

    Animated.spring(NavIndicatorOpacity, {
      toValue: Math.abs(index) === 1 ? 0 : 1,
      velocity: 0,
      useNativeDriver: true
    }).start();
  }, [location]);

  const NavIndicator = (props: any) => {
    return (
      <Animated.View
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        style={{
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          ...props.style,
          width: NavIndicatorWidth,
          transform: [{ translateX: NavIndicatorTranslate }],
          opacity: NavIndicatorOpacity
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        {props.children}
      </Animated.View>
    );
  };

  const onPressExitLanguagesMenu = () => {
    setMenuLanguagesOpen && setMenuLanguagesOpen(false);
  };
  const onPressExitLanguagesMenuAndNavigate = (direction: string) => {
    onPressExitLanguagesMenu();
    navigate(direction);
  };

  return (
    <Nav
      onPress={() => onPressExitLanguagesMenu()}
      style={{ elevation: 6, shadowColor: Theme.color.neutral.black100 }}
    >
      <NavIndicator
        style={{
          position: "absolute",
          top: 0,
          borderRadius: 4,
          width: 60,
          height: 4,
          backgroundColor: Theme.color.primary.blue
        }}
      />
      <NavButton onPress={() => onPressExitLanguagesMenuAndNavigate("/home")}>
        <House
          width={36}
          height={36}
          color={
            isCurrentPage("/home")
              ? Theme.color.primary.blue
              : Theme.color.neutral.black60
          }
        />
        <NavButtonText active={isCurrentPage("/home")}>
          {t("home.home")}
        </NavButtonText>
      </NavButton>
      <NavButton
        primary
        onPress={() => onPressExitLanguagesMenuAndNavigate("/")}
      >
        <PrimaryIconContainer active={isCurrentPage("/")}>
          <MapMarker
            width={36}
            height={36}
            color={
              isCurrentPage("/")
                ? Theme.color.primary.white
                : Theme.color.neutral.black60
            }
          />
        </PrimaryIconContainer>
        <NavButtonText active={isCurrentPage("/")}>
          {t("search.search")}
        </NavButtonText>
      </NavButton>
      <NavButton onPress={() => onPressExitLanguagesMenuAndNavigate("/plus")}>
        <Plus
          width={36}
          height={36}
          color={
            isCurrentPage("/plus")
              ? Theme.color.primary.blue
              : Theme.color.neutral.black60
          }
        />
        <NavButtonText active={isCurrentPage("/plus")}>
          {t("plus.plus")}
        </NavButtonText>
      </NavButton>
    </Nav>
  );
}
