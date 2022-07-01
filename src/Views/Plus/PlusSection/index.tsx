import { useTranslation } from "react-i18next";

import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type PlusSectionProps = {
  isMobile?: boolean;
  isConnected?: boolean;
};

export default function PlusSection({
  isMobile,
  isConnected
}: PlusSectionProps): JSX.Element {
  const { t } = useTranslation();

  const plusContent = [
    { id: "contact", title: t("plus.contactUs"), link: "#" },
    { id: "languages", title: t("plus.languages"), link: "#" },
    { id: "politics", title: t("plus.privacyPolicy"), link: "#" },
    { id: "legals", title: t("plus.legals"), link: "#" },
    { id: "tcu", title: t("plus.tcu"), link: "#" },
    { id: "logout", title: t("plus.logout"), link: "#" }
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
      {plusContentToDisplay.map((content) => (
        <TextWrapper
          key={content.id}
          link
          to={content.link}
          marginTop={16}
          type="paragraph"
          color="grey"
        >
          {content.title}
        </TextWrapper>
      ))}
    </>
  );
}
