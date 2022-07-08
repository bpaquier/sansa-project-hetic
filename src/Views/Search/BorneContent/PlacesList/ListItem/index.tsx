import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import {
  ItemWrapper,
  InfoWrapper,
  TextWrapper,
  TextStyled,
  IconsWrapper,
  IconWrapper,
  ButtonWrapper
} from "./styles";
import Icon from "~/Components/Icon";
import Ping from "~/Components/Ping";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import useCurrentDay from "~/hooks/useCurrentDay";
import theme from "~/Styles/theme.styles";

export interface ListItemProps extends PlaceProps {
  index?: number;
}

export default function ListItem({
  organization_name,
  adress,
  index,
  services_id,
  hours_id,
  id
}: ListItemProps): JSX.Element {
  const { t } = useTranslation();
  const { debouncedFilters, setDisplayPlaceDescription, filteredPlaces } =
    useSearchContext();
  const [formatedCategories, setFormatedCatgories] = useState<string[]>([]);
  const currentDay = useCurrentDay();

  useEffect(() => {
    if (debouncedFilters && debouncedFilters?.length > 0) {
      setFormatedCatgories(
        services_id?.filter((service) => debouncedFilters?.includes(service))
      );
    }
  }, [filteredPlaces]);

  return (
    <ItemWrapper>
      <Ping small index={index} />
      <InfoWrapper>
        <TextWrapper>
          <TextStyled>
            {organization_name && (
              <Text color="black" weight="bold">
                {organization_name}
              </Text>
            )}
          </TextStyled>
          {adress && (
            <TextStyled>
              <Text color="black60">{adress}</Text>
            </TextStyled>
          )}
          {hours_id[0][currentDay] && (
            <TextStyled>
              <Text type="small" color="black60">{`${t(
                "search.openingHours"
              )}: ${hours_id[0][currentDay]}`}</Text>
            </TextStyled>
          )}
        </TextWrapper>
        {services_id && (
          <IconsWrapper>
            {formatedCategories?.map((category, index) => (
              <IconWrapper key={`${category}-${index}`}>
                <ServiceWithIcon
                  {...{ category }}
                  withBackground
                  backgroundType="colored"
                />
              </IconWrapper>
            ))}
            {services_id?.length - formatedCategories?.length > 0 && (
              <Icon
                withBackground
                backgroundType="black"
                text={`+${services_id?.length - formatedCategories?.length}`}
              />
            )}
          </IconsWrapper>
        )}
        <ButtonWrapper onPress={() => setDisplayPlaceDescription(id)}>
          <Text customColor={theme?.color?.primary?.blue} weight="bold">
            {t("search.learnMore")}
          </Text>
        </ButtonWrapper>
      </InfoWrapper>
    </ItemWrapper>
  );
}
