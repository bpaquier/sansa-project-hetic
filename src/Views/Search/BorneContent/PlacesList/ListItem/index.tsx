import { ItemWrapper, InfoWrapper, TextWrapper, TextStyled } from "./styles";
import Ping from "~/Components/Ping";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

export interface ListItemProps extends PlaceProps {
  index?: number;
}

export default function ListItem({
  name,
  adress,
  index
}: ListItemProps): JSX.Element {
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
        <Button
          type="tertiary"
          text="En savoir plus"
          horizontalPosition="left"
        />
      </InfoWrapper>
    </ItemWrapper>
  );
}
