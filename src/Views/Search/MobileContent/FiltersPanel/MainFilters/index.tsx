import { TagsWrapper, Tag, IconWrapper } from "./styles";
import Icon from "~/Components/Icon";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { servicesRepartition } from "~/utils/getServices";

export default function MainFilters(): JSX.Element {
  const { displayFilters, filters, updateFilters } = useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const selectedFilters: string[] = displayFilters
    ? servicesRepartition?.[displayFilters]
    : null;

  return (
    <>
      <Text type="titleL" weight="bold">
        {displayFilters}
      </Text>
      <TagsWrapper>
        {selectedFilters?.map((filter, i) => {
          const isSelected = filters?.includes(filter);
          return (
            <Tag
              key={`${filter}-${i}`}
              {...{ isSelected }}
              onPress={() =>
                updateFilters({
                  action: isSelected ? "remove" : "add",
                  filterName: filter
                })
              }
            >
              <IconWrapper>
                <Icon category={filter} withBackground={false} />
              </IconWrapper>
              <Text color={isSelected ? "black" : "black60"}>{filter}</Text>
            </Tag>
          );
        })}
      </TagsWrapper>
    </>
  );
}
