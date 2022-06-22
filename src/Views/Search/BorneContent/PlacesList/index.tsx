import { PlaceProps } from "../..";
import { ListWrapper, Content } from "./styles";
import Accordion from "~/Components/Accordion";

export interface PlacesListProps {
  selectedList?: PlaceProps[];
}

export default function PlacesList(): JSX.Element {
  return (
    <ListWrapper>
      <Accordion
        headText="Afficher la liste"
        content={<Content />}
        initialState="open"
      />
    </ListWrapper>
  );
}
