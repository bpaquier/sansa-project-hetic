import NavigationBorne from "./NavigationBorne";
import NavigationMobile from "./NavigationMobile";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Navigation() {
  const { isMobile } = useGlobalContext();
  const Navigation = isMobile ? NavigationMobile : NavigationBorne;

  return <Navigation />;
}
