import {
  PanelContentWrapper,
  Service,
  IconWrapper,
  ServicesList
} from "./styles";
import Icon from "~/Components/Icon";
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
  return (
    <PanelContentWrapper>
      {type === "description" && description && (
        <Text type="titleM" lineHeight={29}>
          {description}
        </Text>
      )}
      {type === "services" && services_id && (
        <ServicesList>
          {services_id?.map((service, i) => (
            <Service key={`${service}-${i}`}>
              <IconWrapper>
                <Icon category={service} withBackground size={30} />
              </IconWrapper>
              <Text>{service}</Text>
            </Service>
          ))}
        </ServicesList>
      )}
    </PanelContentWrapper>
  );
}
