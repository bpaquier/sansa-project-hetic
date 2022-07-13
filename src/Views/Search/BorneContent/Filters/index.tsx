import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import {
  FiltersWrapper,
  CheckboxWrapper,
  Content,
  Title,
  LoadingOverlay
} from "./styles";
import Checkbox from "~/Components/Form/Checkbox";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { servicesRepartition } from "~/hooks/useServices";

export default function Filters(): JSX.Element {
  const { language } = i18next;
  const { t } = useTranslation();
  const { displayFilters, isFilterLoading, filters, updateFilters } =
    useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const selectedFilters: string[] = displayFilters
    ? servicesRepartition?.[displayFilters]
    : null;

  return (
    <FiltersWrapper {...{ isFilterLoading }}>
      <Title>
        <Text type="titleL">
          {t(`search.services.${displayFilters}`) ?? displayFilters}
        </Text>
      </Title>
      <Separator orientation="horizontal" />
      <Content>
        {selectedFilters &&
          selectedFilters?.map((filter, i) => {
            const isSelected = filters?.includes(filter);
            return (
              <CheckboxWrapper
                reversed={language === "ar-SA"}
                key={`${filter}-${i}`}
                onPress={() => {
                  updateFilters({
                    action: isSelected ? "remove" : "add",
                    filtersName: [filter]
                  });
                }}
              >
                <View pointerEvents="none">
                  <Checkbox
                    name={filter}
                    forceChecked={isSelected}
                    label={t(`search.services.${filter}`)}
                    large
                    controlled
                  />
                </View>
              </CheckboxWrapper>
            );
          })}
      </Content>
      {isFilterLoading && <LoadingOverlay />}
    </FiltersWrapper>
  );
}
