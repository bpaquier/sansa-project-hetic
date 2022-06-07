import { useGlobalContext } from "~/Contexts/globalContext";
import NavigationMobile from "~/Components/NavigationMobile";
import NavigationBorne from "~/Components/NavigationBorne";

export default function Navigation() {
  const { isMobile } = useGlobalContext();
  const Navigation = isMobile ? NavigationMobile : NavigationBorne;

  return (
    <Navigation></Navigation>
  );
}
