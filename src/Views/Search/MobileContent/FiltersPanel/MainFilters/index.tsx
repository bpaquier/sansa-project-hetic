import { useTranslation } from "react-i18next";

import { TagsWrapper, Tag, IconWrapper } from "./styles";
import Icon from "~/Components/Icon";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { servicesRepartition } from "~/hooks/useServices";

export default function MainFilters(): JSX.Element {
  const { t } = useTranslation();
  const { displayFilters, filters, updateFilters } = useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const selectedFilters: string[] = displayFilters
    ? servicesRepartition?.[displayFilters]
    : null;

  return (
    <>
      <Text type="titleL" weight="bold">
        {t(`search.services.${displayFilters}`)}
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
                  filtersName: [filter]
                })
              }
            >
              <IconWrapper>
                <Icon category={filter} withBackground={false} />
              </IconWrapper>
              <Text
                color={isSelected ? "black" : "black60"}
                weight={isSelected ? "bold" : "regular"}
              >
                {t(`search.services.${filter}`)}
              </Text>
            </Tag>
          );
        })}
      </TagsWrapper>
    </>
  );
}
