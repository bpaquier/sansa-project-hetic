import { useMemo } from "react";

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
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps, useSearchContext } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";
import { getCategoryColor } from "~/utils/catgories";

export interface ListItemProps extends PlaceProps {
  index?: number;
}

export default function ListItem({
  name,
  adress,
  index,
  categories
}: ListItemProps): JSX.Element {
  //const moreCategories = categories?.length - 5;
  const { filters } = useSearchContext();

  const formatedCategories = useMemo(() => {
    return filters && filters?.length > 0
      ? categories?.filter((categoty) => filters?.includes(categoty))
      : categories?.slice(0, 5);
  }, [filters]);

  return (
    <ItemWrapper>
      <Ping small index={index} />
      <InfoWrapper>
        <TextWrapper>
          <TextStyled>
            <Text color="black" weight="bold">
              {name}
            </Text>
          </TextStyled>
          <TextStyled>
            <Text color="black60">{adress}</Text>
          </TextStyled>
        </TextWrapper>
        {categories && (
          <IconsWrapper>
            {formatedCategories?.map((category, index) => {
              const isSelected = filters?.includes(category);
              const backgroundColor = isSelected
                ? getCategoryColor(category, false)
                : theme?.color?.neutral?.black20;
              return (
                <IconWrapper key={index}>
                  <Icon {...{ category, backgroundColor }} withBackground />
                </IconWrapper>
              );
            })}
            {categories?.length - formatedCategories?.length > 0 && (
              <Icon
                withBackground
                backgroundColor={theme?.color?.neutral?.black20}
                text={`+${categories?.length - formatedCategories?.length}`}
              />
            )}
          </IconsWrapper>
        )}
        <Button
          type="tertiary"
          text="En savoir plus"
          horizontalPosition="left"
        />
      </InfoWrapper>
    </ItemWrapper>
  );
}
