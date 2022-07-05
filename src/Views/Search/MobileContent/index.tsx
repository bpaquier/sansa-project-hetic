import Filters from "./Filters";
import FiltersPanel from "./FiltersPanel";
import PlaceDescriptionMobile from "./PlaceDescription";
import PlacesCarousel from "./PlacesCarousel";

export default function MobileContent(): JSX.Element {
  return (
    <>
      <Filters />
      <FiltersPanel />
      <PlacesCarousel />
      <PlaceDescriptionMobile />
    </>
  );
}
