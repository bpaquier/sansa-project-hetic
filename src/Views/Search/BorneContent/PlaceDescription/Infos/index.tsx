import { View } from "react-native";

import { InfosWrapper, InfoItem, IconWrapper, LastInfoItem } from "./styles";
import Link from "~/Components/Icons/System/Communication/Link";
import Phone from "~/Components/Icons/System/Communication/Phone";
import Calendar from "~/Components/Icons/System/Date/Calendar";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";
import theme from "~/Styles/theme.styles";

export default function Infos({
  adress,
  phone_number,
  website,
  spoken_language
}: PlaceProps): JSX.Element {
  return (
    <InfosWrapper>
      {adress && (
        <InfoItem>
          <IconWrapper>
            <MapMarker color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{adress}</Text>
        </InfoItem>
      )}
      {phone_number && (
        <InfoItem>
          <IconWrapper>
            <Phone color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{phone_number}</Text>
        </InfoItem>
      )}
      {website && (
        <InfoItem>
          <IconWrapper>
            <Link color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{website}</Text>
        </InfoItem>
      )}
      {spoken_language && (
        <InfoItem>
          <IconWrapper>
            <MapMarker color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{`Langues: ${spoken_language}`}</Text>
        </InfoItem>
      )}
      <LastInfoItem>
        <IconWrapper>
          <Calendar color={theme?.color?.primary?.blue} />
        </IconWrapper>
        <View>
          <Text>Sur rendez-vous</Text>
          <Text type="small" color="black40">
            Acceuil exclusif: femmes
          </Text>
        </View>
      </LastInfoItem>
    </InfosWrapper>
  );
}
