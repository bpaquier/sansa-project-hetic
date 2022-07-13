import { useLocation, useNavigate } from "react-router-native";

import NavigationBorne from "./NavigationBorne";
import NavigationMobile from "./NavigationMobile";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Navigation() {
  const { isMobile, setMenuLanguagesOpen } = useGlobalContext();
  const Navigation = isMobile ? NavigationMobile : NavigationBorne;
  const navigate = useNavigate();

  const onPressExitLanguagesMenuAndNavigate = (direction?: string) => {
    setMenuLanguagesOpen && setMenuLanguagesOpen(false);
    direction && navigate(direction);
  };
  const location = useLocation();

  return (
    location.pathname !== "/onboarding" && (
      <Navigation
        onPressExitLanguagesMenuAndNavigate={
          onPressExitLanguagesMenuAndNavigate
        }
        onPressMenu={setMenuLanguagesOpen}
      />
    )
  );
}
