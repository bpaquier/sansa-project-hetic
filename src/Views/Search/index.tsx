import BornContent from "./BorneContent";
import Map from "./Map";
import SearchProvider from "~/Contexts/searchContext";

export default function Search(): JSX.Element {
  return (
    <SearchProvider>
      <>
        <Map />
        <BornContent />
      </>
    </SearchProvider>
  );
}
