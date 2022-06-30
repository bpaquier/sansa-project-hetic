import HomeBorne from "../../Components/Home/HomeBorne";
import HomeMobile from "../../Components/Home/HomeMobile";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Home(): JSX.Element {
  const { isMobile } = useGlobalContext();

  const HomeComponent = isMobile ? HomeMobile : HomeBorne;

  return <HomeComponent />;
}
