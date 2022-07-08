import { useTranslation } from "react-i18next";
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
  spoken_language,
  by_appointment,
  preferencialWelcomes
}: PlaceProps): JSX.Element {
  const { t } = useTranslation();
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
                Alert.alert("", t("alerts.link"), [{ text: "OK" }]);
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
          <Text>{`${t("search.languages")}: ${spoken_language}`}</Text>
        </InfoItem>
      ) : null}
      <LastInfoItem>
        {by_appointment || preferencialWelcomes?.[0]?.value ? (
          <>
            <IconWrapper>
              <Calendar2 color={theme?.color?.primary?.blue} />
            </IconWrapper>
            <View>
              {by_appointment ? (
                <Text>{t("search.byAppointement")}</Text>
              ) : null}
              {preferencialWelcomes?.[0]?.value ? (
                <Text color="black60">{preferencialWelcomes?.[0]?.value}</Text>
              ) : null}
            </View>
          </>
        ) : null}
      </LastInfoItem>
    </InfosWrapper>
  );
}
