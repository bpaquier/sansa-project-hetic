import NavigationBorne from "~/Components/NavigationBorne";
import NavigationMobile from "~/Components/NavigationMobile";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Navigation() {
  const { isMobile } = useGlobalContext();
  const Navigation = isMobile ? NavigationMobile : NavigationBorne;

  return <Navigation />;
}
