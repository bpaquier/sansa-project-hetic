import BornContent from "./BorneContent";
import { fakePlaces } from "./fakedata";
import Map from "./Map";
import { useGlobalContext } from "~/Contexts/globalContext";

export interface PlaceProps {
  name?: string;
  position: {
    latitude: string;
    longitude: string;
  };
  adress: string;
}

export default function Search(): JSX.Element {
  const { isMobile } = useGlobalContext();
  return (
    <>
      <Map {...{ isMobile }} selectedPlaces={fakePlaces} />
      <BornContent />
    </>
  );
}
