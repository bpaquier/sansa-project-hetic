import { TouchableOpacity } from "react-native";
import { useLocation } from "react-router-native";

import {
  Nav,
  NavButtonsContainer,
  NavButtonContainer,
  NavButton,
  LanguageSection
} from "./styles";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import Flags from "~/Components/LanguagesMenu/Flags";
import Separator from "~/Components/Ui-kit/Separator";
import Theme from "~/Styles/theme.styles";

type NavigationBorneProps = {
  onPressExitLanguagesMenuAndNavigate: (direction?: string) => void;
  onPressMenu: () => void;
};

export default function NavigationBorne({
  onPressExitLanguagesMenuAndNavigate,
  onPressMenu
}: NavigationBorneProps) {
  const location = useLocation();
  const isCurrentPage = (page: string): boolean =>
    location.pathname === page ||
    (location.pathname.startsWith("/faq") && page.startsWith("/faq"));

  return (
    <Nav
      style={{ elevation: 6, shadowColor: "transparent" }}
      onPress={() => onPressExitLanguagesMenuAndNavigate()}
    >
      <NavButtonsContainer>
        <NavButtonContainer active={isCurrentPage("/")}>
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/")}
            active={isCurrentPage("/")}
          >
            <House width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/search")} spaceTop>
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/search")}
            active={isCurrentPage("/search")}
          >
            <MapMarker
              width={36}
              height={36}
              color={Theme.color.primary.white}
            />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer
          active={isCurrentPage("/plus") || isCurrentPage("/faq")}
          spaceTop
        >
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/plus")}
            active={isCurrentPage("/plus") || isCurrentPage("/faq")}
          >
            <Plus width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
      </NavButtonsContainer>
      <LanguageSection>
        <Separator orientation="horizontal" margin={20} width="100%" />
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPressMenu()}>
          <Flags size={60} />
        </TouchableOpacity>
      </LanguageSection>
    </Nav>
  );
}
