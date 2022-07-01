import { SmallTitleWrapper } from "../styles";
import {
  ServicesList,
  ServicesWrapper,
  IconWrapper,
  Service,
  ButtonWrapper
} from "./styles";
import Icon from "~/Components/Icon";
import ButtonComponent from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

interface ServicesProps extends PlaceProps {
  setDisplayPanel?: (arg: "description" | "services" | null) => void;
}

export default function Services({
  services_id,
  setDisplayPanel
}: ServicesProps): JSX.Element {
  const dispalyMax = 16;
  return (
    <ServicesWrapper>
      <SmallTitleWrapper>
        <Text type="titleM" color="blue">
          Services proposés
        </Text>
      </SmallTitleWrapper>
      <ServicesList>
        {services_id?.slice(0, dispalyMax)?.map(({ service_name }, i) => (
          <Service key={`${service_name}-${i}`}>
            <IconWrapper>
              <Icon category={service_name} withBackground />
            </IconWrapper>
            <Text>{service_name}</Text>
          </Service>
        ))}
        {services_id?.length > dispalyMax && (
          <ButtonWrapper>
            <ButtonComponent
              type="tertiary"
              text="Voir plus"
              onPress={() => setDisplayPanel("services")}
            />
          </ButtonWrapper>
        )}
      </ServicesList>
    </ServicesWrapper>
  );
}
