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
  const moreCategories = categories?.length - 5;
  const { filters } = useSearchContext();

  const formatedCategories = useMemo(() => {
    const response: string[] = categories;
    categories?.forEach((cat, i) => {
      if (filters?.includes(cat)) {
        response.splice(i, 1);
        response.unshift(cat);
      }
    });
    return response;
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
            {formatedCategories?.slice(0, 5)?.map((category, index) => {
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
            {moreCategories > 0 && (
              <Icon
                withBackground
                backgroundColor={theme?.color?.neutral?.black20}
                text={`+${moreCategories}`}
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
