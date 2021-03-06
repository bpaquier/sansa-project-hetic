import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-native";

import {
  ConnectedIllustrationsWrapper,
  ConnectedIllustrationWrapper
} from "./styles";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";
import DisconnectIllustration from "~/Views/Plus/Illustrations/DisconnectIllustration";
import HeartIllustration from "~/Views/Plus/Illustrations/HeartIllustration";
import SafeIllustration from "~/Views/Plus/Illustrations/SafeIllustration";
import TakeNotesIllustration from "~/Views/Plus/Illustrations/TakeNotesIllustration";

type SansaDescriptionConnectedProps = {
  isMobile?: boolean;
  userConnected?: string;
};

export default function SansaDescriptionConnected({
  isMobile,
  userConnected
}: SansaDescriptionConnectedProps): JSX.Element {
  const { t } = useTranslation();
  const { setUserConnected } = useGlobalContext();
  const navigate = useNavigate();

  const connectedContent = [
    {
      id: "newNote",
      title: t("plus.newNote"),
      illustration: <TakeNotesIllustration />
    },
    {
      id: "digitalSafe",
      title: t("plus.digitalSafe"),
      illustration: <SafeIllustration />
    },
    {
      id: "favoritePlaces",
      title: t("plus.favouritePlaces"),
      illustration: <HeartIllustration />
    },
    {
      id: "logout",
      title: t("common.logout"),
      illustration: <DisconnectIllustration />
    }
  ];

  const connectedContentToDisplay = isMobile
    ? connectedContent.filter(({ id }) => id !== "logout")
    : connectedContent;
  return (
    <>
      <Text type={isMobile ? "titleL" : "titleM"}>
        {t("plus.helloWithName", { name: userConnected })}
      </Text>
      {isMobile && (
        <>
          <Separator orientation="horizontal" columnWidth={22} margin={16} />
          {connectedContentToDisplay.map(
            (content, index) =>
              index !== connectedContent.length && (
                <TextWrapper
                  link
                  to="#"
                  marginTop={index !== 0 ? 16 : 0}
                  key={content.title}
                  type="paragraph"
                  color="grey"
                >
                  {content.title}
                </TextWrapper>
              )
          )}
        </>
      )}
      {!isMobile && (
        <ConnectedIllustrationsWrapper>
          {connectedContent.map((content, index) => {
            const isDisabled = connectedContent.length - 1 !== index;
            return (
              <ConnectedIllustrationWrapper
                activeOpacity={0.7}
                onPress={() => {
                  if (content.id === "logout") {
                    setUserConnected();
                    navigate("/");
                  }
                }}
                key={content.title}
              >
                {content.illustration}
                <Text
                  type="paragraph"
                  weight="bold"
                  color={isDisabled ? "black40" : "black"}
                >
                  {content.title}
                </Text>
              </ConnectedIllustrationWrapper>
            );
          })}
        </ConnectedIllustrationsWrapper>
      )}
    </>
  );
}
