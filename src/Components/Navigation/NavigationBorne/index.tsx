import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { useLocation } from "react-router-native";

import {
  Nav,
  NavButtonsContainer,
  NavButtonContainer,
  NavButton,
  LanguageSection
} from "./styles";
import Arabic from "~/Components/Icons/Flags/Arabic";
import English from "~/Components/Icons/Flags/English";
import France from "~/Components/Icons/Flags/France";
import Spain from "~/Components/Icons/Flags/Spain";
import Ukraine from "~/Components/Icons/Flags/Ukraine";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import House from "~/Components/Icons/System/System/House";
import Plus from "~/Components/Icons/System/System/Plus";
import Flags from "~/Components/LanguagesMenu/Flags";
import Separator from "~/Components/Ui-kit/Separator";
import Theme from "~/Styles/theme.styles";

type NavigationBorneProps = {
  onPressExitLanguagesMenuAndNavigate: (direction?: string) => void;
};

export default function NavigationBorne({
  onPressExitLanguagesMenuAndNavigate
}: NavigationBorneProps) {
  const location = useLocation();
  const isCurrentPage = (page: string): boolean => location.pathname === page;
  const { i18n } = useTranslation();

  const Flag = (): JSX.Element => {
    switch (i18n.language) {
      case "en-EN":
        return <English width={60} height={60} />;
      case "es-ES":
        return <Spain width={60} height={60} />;
      case "ar-SA":
        return <Arabic width={60} height={60} />;
      case "uk-UA":
        return <Ukraine width={60} height={60} />;
      case "fr-FR":
      default:
        return <France width={60} height={60} />;
    }
  };

  return (
    <Nav
      style={{ elevation: 6, shadowColor: "transparent" }}
      onPress={() => onPressExitLanguagesMenuAndNavigate()}
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPressExitLanguagesMenuAndNavigate()}
        >
          <Flags size={60} />
        </TouchableOpacity>
      </LanguageSection>
    </Nav>
  );
}
