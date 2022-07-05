import { View, Linking, Pressable, Alert } from "react-native";

import { InfosWrapper, InfoItem, IconWrapper, LastInfoItem } from "./styles";
import Link from "~/Components/Icons/System/Communication/Link";
import Phone from "~/Components/Icons/System/Communication/Phone";
import Calendar2 from "~/Components/Icons/System/Date/Calendar2";
import MapMarker from "~/Components/Icons/System/Map/MapMarker";
import Globe from "~/Components/Icons/System/System/Globe";
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
      {adress ? (
        <InfoItem>
          <IconWrapper>
            <MapMarker color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{adress}</Text>
        </InfoItem>
      ) : null}
      {phone_number ? (
        <InfoItem>
          <IconWrapper>
            <Phone color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{phone_number}</Text>
        </InfoItem>
      ) : null}
      {website ? (
        <InfoItem>
          <IconWrapper>
            <Link color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Pressable
            onPress={() => {
              Linking.openURL(website).catch(() => {
                Alert.alert("", "Ce lien ne focntionne pas", [{ text: "OK" }]);
              });
            }}
          >
            <Text>{website}</Text>
          </Pressable>
        </InfoItem>
      ) : null}
      {spoken_language ? (
        <InfoItem>
          <IconWrapper>
            <Globe color={theme?.color?.primary?.blue} />
          </IconWrapper>
          <Text>{`Langues: ${spoken_language}`}</Text>
        </InfoItem>
      ) : null}
      <LastInfoItem>
        <IconWrapper>
          <Calendar2 color={theme?.color?.primary?.blue} />
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
