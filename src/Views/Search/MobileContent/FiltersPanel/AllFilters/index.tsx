import { useTranslation } from "react-i18next";

import BallonTwoColors from "./ballon_two_colors";
import {
  TagsWrapper,
  Tag,
  IconWrapper,
  NoResultsWrapper,
  IllustrationWrapper
} from "./styles";
import Cross from "~/Components/Icons/System/System/Cross";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { getServiceColor } from "~/utils/getServices";

export default function AllFilters(): JSX.Element {
  const { t } = useTranslation();
  const { filters, updateFilters } = useSearchContext();
  return (
    <>
      {filters?.length > 0 ? (
        <>
          <Text type="titleL" weight="bold">
            {t("search.selectedFilters")}
          </Text>
          <TagsWrapper>
            {filters?.map((filter, i) => {
              const color = getServiceColor(filter, false);
              return (
                <Tag
                  key={`${filter}-${i}`}
                  {...{ color }}
                  activeOpacity={0.7}
                  onPress={() =>
                    updateFilters({ action: "remove", filtersName: [filter] })
                  }
                >
                  <Text customColor={color}>
                    {t(`search.services.${filter}`)}
                  </Text>
                  <IconWrapper>
                    <Cross {...{ color }} width={15} height={15} />
                  </IconWrapper>
                </Tag>
              );
            })}
          </TagsWrapper>
        </>
      ) : (
        <NoResultsWrapper>
          <IllustrationWrapper>
            <BallonTwoColors />
          </IllustrationWrapper>
          <Text color="black40">{t("search.noSelectedFilters")}</Text>
        </NoResultsWrapper>
      )}
    </>
  );
}
