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
import Theme from "~/Styles/theme.styles";

export default function NavigationBorne() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;

  return (
    <Nav>
      <NavButtonsContainer>
        <NavButtonContainer active={isCurrentPage("/home")}>
          <NavButton
            onPress={() => navigate("/home")}
            active={isCurrentPage("/home")}
          >
            <House width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/")} spaceTop>
          <NavButton onPress={() => navigate("/")} active={isCurrentPage("/")}>
            <MapMarker
              width={36}
              height={36}
              color={Theme.color.primary.white}
            />
          </NavButton>
        </NavButtonContainer>
        <NavButtonContainer active={isCurrentPage("/plus")} spaceTop>
          <NavButton
            onPress={() => navigate("/plus")}
            active={isCurrentPage("/plus")}
          >
            <Plus width={36} height={36} color={Theme.color.primary.white} />
          </NavButton>
        </NavButtonContainer>
      </NavButtonsContainer>
      <LanguageSection>
        <Separator orientation="horizontal" margin={20} width="100%" />
        <France />
      </LanguageSection>
    </Nav>
  );
}
