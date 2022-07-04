import { useEffect, useState } from "react";

import { Animated, Dimensions } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import { Nav, NavButton, NavButtonText, PrimaryIconContainer } from "./styles";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import Theme from "~/Styles/theme.styles";

export default function NavigationMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;

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

  return (
    <Nav style={{ elevation: 6, shadowColor: Theme.color.neutral.black100 }}>
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
      <NavButton onPress={() => navigate("/home")}>
        <House
          width={36}
          height={36}
          color={
            isCurrentPage("/home")
              ? Theme.color.primary.blue
              : Theme.color.neutral.black60
          }
        />
        <NavButtonText active={isCurrentPage("/home")}>Accueil</NavButtonText>
      </NavButton>
      <NavButton primary onPress={() => navigate("/")}>
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
        <NavButtonText active={isCurrentPage("/")}>Rechercher</NavButtonText>
      </NavButton>
      <NavButton onPress={() => navigate("/plus")}>
        <Plus
          width={36}
          height={36}
          color={
            isCurrentPage("/plus")
              ? Theme.color.primary.blue
              : Theme.color.neutral.black60
          }
        />
        <NavButtonText active={isCurrentPage("/plus")}>Plus</NavButtonText>
      </NavButton>
    </Nav>
  );
}
