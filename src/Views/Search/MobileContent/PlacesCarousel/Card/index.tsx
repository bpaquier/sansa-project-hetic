import { CardWrapper, CardContent, IndexWrapper, Item } from "./styles";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";
import getCurrentDay from "~/hooks/getCurrentDay";

export interface CardProps extends PlaceProps {
  index?: number;
}

export default function Card({
  organization_name,
  index,
  adress,
  hours_id
}: CardProps): JSX.Element {
  const currentDay = getCurrentDay();

  return (
    <CardWrapper>
      <CardContent>
        {organization_name && (
          <Item>
            <IndexWrapper>
              <Text color="white">{index + 1}</Text>
            </IndexWrapper>
            <Text weight="bold">
              {`${organization_name?.slice(0, 25)} ${
                organization_name?.length > 25 ? "..." : ""
              }`}
            </Text>
          </Item>
        )}
        {adress && (
          <Item>
            <Text weight="bold" type="small" color="black60">
              {adress}
            </Text>
          </Item>
        )}
        {hours_id[0][currentDay] && (
          <Item>
            <Text
              type="small"
              color="black60"
            >{`Ouvert de ${hours_id[0][currentDay]}`}</Text>
          </Item>
        )}

        {/*  <Item>
          <Text type="small" color="black40">{`Services: `}</Text>
        </Item> */}
      </CardContent>
    </CardWrapper>
  );
}
