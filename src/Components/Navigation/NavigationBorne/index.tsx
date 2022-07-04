import { TouchableOpacity } from "react-native";
import { useNavigate, useLocation } from "react-router-native";

import {
  Nav,
  NavButtonsContainer,
  NavButtonContainer,
  NavButton,
  LanguageSection
} from "./styles";
import France from "~/Components/Icons/Flags/France";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import Separator from "~/Components/Ui-kit/Separator";
import { useGlobalContext } from "~/Contexts/globalContext";
import Theme from "~/Styles/theme.styles";

export default function NavigationBorne() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;
  const { setMenuLanguagesOpen } = useGlobalContext();

  const onPressExitLanguagesMenu = () => {
    setMenuLanguagesOpen && setMenuLanguagesOpen(false);
  };
  const onPressExitLanguagesMenuAndNavigate = (direction: string) => {
    onPressExitLanguagesMenu();
    navigate(direction);
  };

  return (
    <Nav
      style={{ elevation: 6, shadowColor: "transparent" }}
      onPress={() => onPressExitLanguagesMenu()}
    >
      <NavButtonsContainer>
        <NavButtonContainer active={isCurrentPage("/home")}>
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/home")}
            active={isCurrentPage("/home")}
          >
            <House width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/")} spaceTop>
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/")}
            active={isCurrentPage("/")}
          >
            <MapMarker
              width={36}
              height={36}
              color={Theme.color.primary.white}
            />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/plus")} spaceTop>
          <NavButton
            onPress={() => onPressExitLanguagesMenuAndNavigate("/plus")}
            active={isCurrentPage("/plus")}
          >
            <Plus width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
      </NavButtonsContainer>
      <LanguageSection>
        <Separator orientation="horizontal" margin={20} width="100%" />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setMenuLanguagesOpen && setMenuLanguagesOpen();
          }}
        >
          <France />
        </TouchableOpacity>
      </LanguageSection>
    </Nav>
  );
}
