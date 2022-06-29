import { useEffect, useMemo, useState } from "react";

import {
  TagsWrapper,
  Tag,
  TagList,
  TagListContainer,
  TagsListContent,
  Overlay
} from "./styles";
import Cross from "~/Components/Icons/System/System/Cross";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";
import { getCategoryColor } from "~/utils/catgories";

export default function Tags(): JSX.Element {
  const { filters, setFilters, updateFilters } = useSearchContext();
  const [displayTagsList, setDisplayTagsList] = useState<boolean>(false);

  useEffect(() => {
    (!filters || filters?.length === 0) && setDisplayTagsList(false);
  }, [filters]);

  const FilterList = useMemo(
    () =>
      filters?.map((filter, i) => {
        const color = getCategoryColor(filter, false);
        return (
          <Tag
            borderColor={color}
            onPress={() =>
              updateFilters({ action: "remove", filterName: filter })
            }
            key={`${filter}-${i}`}
          >
            <Text weight="bold" customColor={color}>
              {filter}
            </Text>
            <Cross color={color} />
          </Tag>
        );
      }),
    [filters, updateFilters]
  );

  return (
    filters?.length > 0 && (
      <>
        {displayTagsList && (
          <Overlay onPress={() => setDisplayTagsList(false)} />
        )}
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
          <Tag
            borderColor={theme?.color?.primary?.blueDark}
            onPress={() => setDisplayTagsList((prev) => !prev)}
          >
            <Text
              color="black"
              weight="bold"
            >{`Voir tous le(s) filtre(s) (${filters?.length})`}</Text>
          </Tag>
          {displayTagsList && (
            <TagListContainer>
              <TagList>
                <TagsListContent>{FilterList}</TagsListContent>
              </TagList>
            </TagListContainer>
          )}
        </TagsWrapper>
      </>
    )
  );
}
