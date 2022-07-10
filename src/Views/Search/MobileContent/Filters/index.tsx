import { useTranslation } from "react-i18next";

import {
  FiltersWrapper,
  Input,
  InputWrapper,
  SearchIconWrapper,
  FiltersSlider,
  Tag,
  TagIcon
} from "./styles";
import Filter from "~/Components/Icons/System/System/Filter";
import Search from "~/Components/Icons/System/System/Search";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import {
  getIconByService,
  getServiceColor,
  MainServicesToDisplay
} from "~/hooks/useServices";
import theme from "~/Styles/theme.styles";

export default function Filters(): JSX.Element {
  const { t } = useTranslation();
  const {
    setDisplayFilters,
    filters,
    handleSearch,
    searchValue,
    displaySearchResultsList
  } = useSearchContext();

  return (
    <FiltersWrapper>
      <InputWrapper>
        <Input
          placeholder={t("search.searchPlaceholder")}
          onChangeText={(value) => handleSearch(value)}
          value={searchValue}
        />
        <SearchIconWrapper>
          <Search width={25} height={25} />
        </SearchIconWrapper>
      </InputWrapper>
      {!displaySearchResultsList && (
        <FiltersSlider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <Tag
            bgColor={theme?.color?.primary?.blueDark}
            activeOpacity={0.7}
            firstElement
            onPress={() => setDisplayFilters("all")}
          >
            <TagIcon>
              <Filter
                color={theme?.color?.primary?.white}
                width={12}
                height={12}
              />
            </TagIcon>
            <Text color="white" type="small">
              {`${filters?.length > 0 ? `${filters?.length} ` : ""}${t(
                "search.filters"
              )}`}
            </Text>
          </Tag>
          {MainServicesToDisplay?.map((service, i) => {
            const color = getServiceColor(service, true);
            const Icon = getIconByService(service);
            return (
              <Tag
                key={`${service}-${i}`}
                activeOpacity={0.9}
                borderColor={color}
                lastElement={i === MainServicesToDisplay?.length - 1}
                onPress={() => setDisplayFilters(service)}
              >
                <TagIcon>
                  <Icon width={22} height={22} />
                </TagIcon>
                <Text customColor={color} type="small">
                  {t(`search.services.${service}`)}
                </Text>
              </Tag>
            );
          })}
        </FiltersSlider>
      )}
    </FiltersWrapper>
  );
}
