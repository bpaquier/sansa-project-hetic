import { useTranslation } from "react-i18next";

import { PanelContentWrapper, Service, ServicesList } from "./styles";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

interface PanelContentprops extends PlaceProps {
  type?: "description" | "services";
}

export default function PanelContent({
  services_id,
  description,
  type
}: PanelContentprops): JSX.Element {
  const { t } = useTranslation();
  return (
    <PanelContentWrapper>
      {type === "description" && description && (
        <Text type="titleM">{description}</Text>
      )}
      {type === "services" && services_id && (
        <ServicesList>
          {services_id?.map((service, i) => (
            <Service key={`${service}-${i}`}>
              <ServiceWithIcon
                category={service}
                withBackground
                size={30}
                text={t(`search.services.${service}`)}
              />
            </Service>
          ))}
        </ServicesList>
      )}
    </PanelContentWrapper>
  );
}
