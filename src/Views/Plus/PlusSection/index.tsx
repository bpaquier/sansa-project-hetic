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
    { id: "contact", title: t("nousContacter"), link: "#" },
    { id: "langues", title: t("langues"), link: "#" },
    { id: "politique", title: t("politiqueDeConfidentialite"), link: "#" },
    { id: "mentionsLegales", title: t("mentionsLegales"), link: "#" },
    { id: "cgu", title: t("CGU"), link: "#" },
    { id: "deconnecter", title: t("seDeconnecter"), link: "#" }
  ];

  const plusContentToDisplay = !isMobile
    ? plusContent.filter(({ id }) => id !== "langues" && id !== "deconnecter")
    : !isConnected
    ? plusContent.filter(({ id }) => id !== "deconnecter")
    : plusContent;

  return (
    <>
      <TextWrapper marginBottom={16} type="titleL">
        {t("plus")}
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
