import Filters from "./Filters";
import { Wrapper, Content } from "./styles";

export default function MobileContent(): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Filters />
      </Content>
    </Wrapper>
  );
}
