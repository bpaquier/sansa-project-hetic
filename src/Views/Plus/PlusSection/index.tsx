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
    { id: "contact", title: t("plus.nousContacter"), link: "#" },
    { id: "langues", title: t("plus.langues"), link: "#" },
    { id: "politique", title: t("plus.politiqueDeConfidentialite"), link: "#" },
    { id: "mentionsLegales", title: t("plus.mentionsLegales"), link: "#" },
    { id: "cgu", title: t("plus.CGU"), link: "#" },
    { id: "deconnecter", title: t("plus.seDeconnecter"), link: "#" }
  ];

  const plusContentToDisplay = !isMobile
    ? plusContent.filter(({ id }) => id !== "langues" && id !== "deconnecter")
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
