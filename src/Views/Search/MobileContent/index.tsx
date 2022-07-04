import Filters from "./Filters";
import FiltersPanel from "./FiltersPanel";
import PlacesCarousel from "./PlacesCarousel";

export default function MobileContent(): JSX.Element {
  return (
    <>
      <Filters />
      <FiltersPanel />
      <PlacesCarousel />
    </>
  );
}
