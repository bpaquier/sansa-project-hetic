import i18next from "i18next";
import { useTranslation } from "react-i18next";

import Filter from "./Filter";
import { FiltersWrapper, CheckboxWrapper, Content, Title } from "./styles";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext } from "~/Contexts/searchContext";
import { servicesRepartition } from "~/utils/getServices";

export default function Filters(): JSX.Element {
  const { language } = i18next;
  const { t } = useTranslation();
  const { displayFilters } = useSearchContext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const selectedFilters: string[] = displayFilters
    ? servicesRepartition?.[displayFilters]
    : null;

  return displayFilters ? (
    <FiltersWrapper>
      <Title>
        <Text type="titleL">
          {t(`search.services.${displayFilters}`) ?? displayFilters}
        </Text>
      </Title>
      <Separator orientation="horizontal" />
      <Content>
        {selectedFilters &&
          selectedFilters?.map((filter, i) => {
            return (
              <CheckboxWrapper
                reversed={language === "ar-SA"}
                key={`${filter}-${i}`}
              >
                <Filter {...{ filter }} />
              </CheckboxWrapper>
            );
          })}
      </Content>
    </FiltersWrapper>
  ) : null;
}
