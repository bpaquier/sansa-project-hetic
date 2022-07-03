import Filters from "./Filters";
import FiltersPanel from "./FiltersPanel";
import { Wrapper, Content } from "./styles";

export default function MobileContent(): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Filters />
        <FiltersPanel />
      </Content>
    </Wrapper>
  );
}
