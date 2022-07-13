import { useEffect, useMemo, useState } from "react";

import { useTranslation } from "react-i18next";

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
import { getServiceColor } from "~/hooks/useServices";
import theme from "~/Styles/theme.styles";

export default function Tags(): JSX.Element {
  const { t } = useTranslation();
  const { filters, setFilters, updateFilters } = useSearchContext();
  const [displayTagsList, setDisplayTagsList] = useState<boolean>(false);

  useEffect(() => {
    (!filters || filters?.length === 0) && setDisplayTagsList(false);
  }, [filters]);

  const FilterList = useMemo(
    () =>
      filters?.map((filter, i) => {
        const color = getServiceColor(filter, false);
        return (
          <Tag
            borderColor={color}
            onPress={() =>
              updateFilters({ action: "remove", filtersName: [filter] })
            }
            key={`${filter}-${i}`}
          >
            <Text weight="bold" customColor={color}>
              {t(`search.services.${filter}`)}
            </Text>
            <Cross color={color} />
          </Tag>
        );
      }),
    [filters, updateFilters]
  );

  return filters?.length > 0 ? (
    <>
      {displayTagsList && (
        <Overlay
          style={{ elevation: 9 }}
          onPress={() => setDisplayTagsList(false)}
        />
      )}
      <TagsWrapper style={{ elevation: 9, shadowColor: "transparent" }}>
        <Tag
          activeOpacity={0.8}
          bgColor={theme?.color?.primary?.blue}
          borderColor={theme?.color?.primary?.blue}
          onPress={() => setFilters(null)}
        >
          <Text weight="bold" color="white">
            {t("search.deleteFilters")}
          </Text>
        </Tag>
        <Tag
          borderColor={theme?.color?.primary?.blue}
          onPress={() => setDisplayTagsList((prev) => !prev)}
        >
          <Text color="blue" weight="bold">{`${t("search.seeFilters")} (${
            filters?.length
          })`}</Text>
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
  ) : null;
}
