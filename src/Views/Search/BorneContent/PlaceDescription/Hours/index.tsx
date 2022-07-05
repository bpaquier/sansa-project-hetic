import { SmallTitleWrapper } from "../styles";
import {
  HoursContentWrapper,
  HoursItemsWrapper,
  Day,
  HoursWrapper
} from "./styles";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

export default function Hours({ hours_id }: PlaceProps): JSX.Element {
  return (
    <HoursWrapper>
      <SmallTitleWrapper>
        <Text type="titleM" color="blue">
          Horaires
        </Text>
      </SmallTitleWrapper>
      <HoursContentWrapper>
        <HoursItemsWrapper>
          {Object.keys(hours_id?.[0])?.map((day, i) => (
            <Day key={`${day}-${i}`}>
              <Text color="black20">{day}</Text>
            </Day>
          ))}
        </HoursItemsWrapper>
        <HoursItemsWrapper>
          {Object.values(hours_id?.[0])?.map((hours, i) => (
            <Text key={`${hours}-${i}`}>{hours}</Text>
          ))}
        </HoursItemsWrapper>
      </HoursContentWrapper>
    </HoursWrapper>
  );
}
