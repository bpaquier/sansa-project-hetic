import { useTranslation } from "react-i18next";

import {
  ListWrapper,
  ListContent,
  ItemWrapper,
  InfoWrapper,
  TextWrapper,
  TextStyled,
  ButtonWrapper
} from "./styles";
import Ping from "~/Components/Ping";
import Text from "~/Components/Ui-kit/Text";
import { useSearchContext, PlaceProps } from "~/Contexts/searchContext";
import useCurrentDay from "~/hooks/useCurrentDay";

export default function List(): JSX.Element {
  const { t } = useTranslation();
  const { filteredPlaces } = useSearchContext();
  const currentDay = useCurrentDay();

  return (
    <ListWrapper>
      <ListContent>
        {filteredPlaces?.map(
          (
            {
              organization_name,
              adress,
              services_id,
              hours_id,
              id
            }: PlaceProps,
            index
          ) => (
            <ItemWrapper key={`${organization_name}-${index}`}>
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

                <ButtonWrapper /* onPress={() => setDisplayPlaceDescription(id)} */
                >
                  <Text color="blue" weight="bold">
                    {t("search.learnMore")}
                  </Text>
                </ButtonWrapper>
              </InfoWrapper>
            </ItemWrapper>
          )
        )}
      </ListContent>
    </ListWrapper>
  );
}
