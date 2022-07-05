import { useMemo } from "react";

import { TouchableOpacity } from "react-native";

import {
  ItemWrapper,
  InfoWrapper,
  TextWrapper,
  TextStyled,
  IconsWrapper,
  IconWrapper
} from "./styles";
import Icon from "~/Components/Icon";
import Ping from "~/Components/Ping";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import getCurrentDay from "~/hooks/getCurrentDay";
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
  const { debouncedFilters, setDisplayPlaceDescription } = useSearchContext();
  const currentDay = getCurrentDay();

  const formatedCategories = useMemo(() => {
    return debouncedFilters && debouncedFilters?.length > 0
      ? services_id?.filter((service) => debouncedFilters?.includes(service))
      : services_id?.slice(0, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilters]);

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
              <Text
                type="small"
                color="black60"
              >{`Ouvert de ${hours_id[0][currentDay]}`}</Text>
            </TextStyled>
          )}
        </TextWrapper>
        {services_id && (
          <IconsWrapper>
            {formatedCategories?.map((category, index) => {
              const isSelected = debouncedFilters?.includes(category);
              return (
                <IconWrapper key={`${category}-${index}`}>
                  <Icon
                    category={category}
                    withBackground
                    backgroundType={isSelected ? "colored" : "black"}
                  />
                </IconWrapper>
              );
            })}
            {services_id?.length - formatedCategories?.length > 0 && (
              <Icon
                withBackground
                backgroundType="black"
                text={`+${services_id?.length - formatedCategories?.length}`}
              />
            )}
          </IconsWrapper>
        )}
        <TouchableOpacity onPress={() => setDisplayPlaceDescription(id)}>
          <Text customColor={theme?.color?.primary?.blue} weight="bold">
            En savoir plus
          </Text>
        </TouchableOpacity>
      </InfoWrapper>
    </ItemWrapper>
  );
}
