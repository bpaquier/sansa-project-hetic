import { useTranslation } from "react-i18next";

import Arabic from "~/Components/Icons/Flags/Arabic";
import English from "~/Components/Icons/Flags/English";
import France from "~/Components/Icons/Flags/France";
import Spain from "~/Components/Icons/Flags/Spain";
import Ukraine from "~/Components/Icons/Flags/Ukraine";

type FlagsProps = {
  size: number;
};

export default function Flags({ size }: FlagsProps) {
  const { i18n } = useTranslation();

  switch (i18n.language) {
    case "en-EN":
      return <English width={size} height={size} />;
    case "es-ES":
      return <Spain width={size} height={size} />;
    case "ar-SA":
      return <Arabic width={size} height={size} />;
    case "uk-UA":
      return <Ukraine width={size} height={size} />;
    case "fr-FR":
    default:
      return <France width={size} height={size} />;
  }
}
