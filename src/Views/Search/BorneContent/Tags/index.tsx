import { useMemo, useState } from "react";

import {
  TagsWrapper,
  Tag,
  TagList,
  TagListContainer,
  TagsListContent
} from "./styles";
import Cross from "~/Components/Icons/System/System/Cross";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";
import { getCategoryColor } from "~/utils/catgories";

interface FilterTagProps {
  marginBottom?: number;
  filter?: string;
}

export default function Tags(): JSX.Element {
  const { filters, setFilters, updateFilters } = useSearchContext();
  const [displayTagsList, setDisplayTagsList] = useState<boolean>(false);

  const FilterTag = ({ filter, marginBottom }: FilterTagProps) => {
    const color = getCategoryColor(filter, false);
    return (
      <Tag
        borderColor={color}
        {...{ marginBottom }}
        onPress={() => updateFilters({ action: "remove", filterName: filter })}
      >
        <Text weight="bold" customColor={color}>
          {filter}
        </Text>
        <Cross color={color} />
      </Tag>
    );
  };

  const filtersDisplayed = useMemo(
    () =>
      filters
        ?.slice(0, 3)
        ?.map((filter, i) => (
          <FilterTag {...{ filter }} key={`${filter}-${i}`} />
        )),
    [filters]
  );

  const filtersInLists = useMemo(
    () =>
      filters
        ?.slice(3, filters?.length)
        ?.map((filter, i) => (
          <FilterTag {...{ filter }} key={`${filter}-${i}`} marginBottom={8} />
        )),
    [filters]
  );

  return (
    <TagsWrapper>
      <Tag
        activeOpacity={0.8}
        bgColor={theme?.color?.primary?.blue}
        borderColor={theme?.color?.primary?.blue}
        onPress={() => setFilters(null)}
      >
        <Text weight="bold" color="white">
          {`Supprimer le(s) filtre(s)`}
        </Text>
      </Tag>
      {filtersDisplayed}
      {filters?.length > 3 && (
        <>
          <Tag
            borderColor={theme?.color?.primary?.blueDark}
            onPress={() => setDisplayTagsList((prev) => !prev)}
          >
            <Text color="black" weight="bold">{`+ ${
              filters?.length - 3
            }`}</Text>
          </Tag>
          {displayTagsList && (
            <TagListContainer>
              <TagList>
                <TagsListContent>{filtersInLists}</TagsListContent>
              </TagList>
            </TagListContainer>
          )}
        </>
      )}
    </TagsWrapper>
  );
}
