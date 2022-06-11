import BornContent from "./BorneContent";
import Map from "./Map";
import { useGlobalContext } from "~/Contexts/globalContext";

export default function Search(): JSX.Element {
  const { isMobile } = useGlobalContext();
  return (
    <>
      <Map {...{ isMobile }} />
      <BornContent />
    </>
  );
}
