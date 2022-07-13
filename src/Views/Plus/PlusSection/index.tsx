import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import { WrapperPlus } from "./styles";
import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import { useGlobalContext } from "~/Contexts/globalContext";

type PlusSectionProps = {
  isMobile?: boolean;
  isConnected?: boolean;
};

export default function PlusSection({
  isConnected,
  isMobile
}: PlusSectionProps): JSX.Element {
  const { t } = useTranslation();
  const { setMenuLanguagesOpen, setUserConnected } = useGlobalContext();
  const navigate = useNavigate();

  const plusContent = [
    { id: "contact", title: t("plus.contactUs"), link: "#" },
    {
      id: "languages",
      title: t("plus.languages")
    },
    { id: "politics", title: t("plus.privacyPolicy"), link: "#" },
    { id: "legals", title: t("plus.legals"), link: "#" },
    { id: "tcu", title: t("plus.tcu"), link: "#" },
    { id: "logout", title: t("common.logout"), link: "#" }
  ];

  const plusContentToDisplay = !isMobile
    ? plusContent.filter(({ id }) => id !== "languages" && id !== "logout")
    : !isConnected
    ? plusContent.filter(({ id }) => id !== "deconnecter")
    : plusContent;

  return (
    <>
      <TextWrapper marginBottom={16} type="titleL">
        {t("plus.plus")}
      </TextWrapper>
      <Separator orientation="horizontal" theme="dark" width="100%" />
      <WrapperPlus>
        {plusContentToDisplay.map((content, index) => (
          <View key={content.id}>
            <TextWrapper
              type="paragraph"
              color="grey"
              marginTop={isMobile && index > 0 ? 16 : 0}
              onPress={() => {
                if (content.id === "languages" && setMenuLanguagesOpen)
                  setMenuLanguagesOpen();
                if (content.id === "logout") {
                  setUserConnected();
                  navigate("/");
                }
              }}
            >
              {content.title}
            </TextWrapper>
          </View>
        ))}
      </WrapperPlus>
    </>
  );
}
