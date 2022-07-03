import BornContent from "./BorneContent";
import Map from "./Map";
import MobileContent from "./MobileContent";
import { useGlobalContext } from "~/Contexts/globalContext";
import SearchProvider from "~/Contexts/searchContext";

export default function Search(): JSX.Element {
  const { isMobile } = useGlobalContext();
  return (
    <SearchProvider>
      <>
        <Map />
        {isMobile ? <MobileContent /> : <BornContent />}
      </>
    </SearchProvider>
  );
}
