import { PlaceProps } from "../..";
import { ListWrapper } from "./styles";

export interface PlacesListProps {
  selectedList?: PlaceProps[];
}

export default function PlacesList({
  selectedList
}: PlacesListProps): JSX.Element {
  return selectedList ? <ListWrapper></ListWrapper> : null;
}
