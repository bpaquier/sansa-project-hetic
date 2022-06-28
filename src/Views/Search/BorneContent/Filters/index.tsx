import Filter from "./Filter";
import { FiltersWrapper, CheckboxWrapper, Content, Title } from "./styles";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { categoriesRepartition } from "~/utils/catgories";

export default function Filters(): JSX.Element {
  const { displayFilters } = useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const selectedFilters: string[] = displayFilters
    ? categoriesRepartition?.[displayFilters]
    : null;

  return (
    <FiltersWrapper>
      <Title>
        <Text type="titleL">{displayFilters}</Text>
      </Title>
      <Separator orientation="horizontal" />
      <Content>
        {selectedFilters &&
          selectedFilters?.map((filter, i) => {
            return (
              <CheckboxWrapper key={`${filter}-${i}`}>
                <Filter {...{ filter }} />
              </CheckboxWrapper>
            );
          })}
      </Content>
    </FiltersWrapper>
  );
}
