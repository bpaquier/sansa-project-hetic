import { useTranslation } from "react-i18next";

import { SmallTitleWrapper } from "../styles";
import {
  ServicesList,
  ServicesWrapper,
  Service,
  ButtonWrapper
} from "./styles";
import ServiceWithIcon from "~/Components/ServiceWithIcon";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

interface ServicesProps extends PlaceProps {
  setDisplayPanel?: (arg: "description" | "services" | null) => void;
}

export default function Services({
  services_id,
  setDisplayPanel
}: ServicesProps): JSX.Element {
  const { t } = useTranslation();
  const dispalyMax = 13;
  return (
    <ServicesWrapper>
      <SmallTitleWrapper>
        <Text type="titleM" color="blue">
          {t("search.servicesOffered")}
        </Text>
      </SmallTitleWrapper>
      <ServicesList>
        {services_id?.slice(0, dispalyMax)?.map((service, i) => (
          <Service key={`${service}-${i}`}>
            <ServiceWithIcon
              text={t(`search.services.${service}`)}
              category={service}
              withBackground
            />
          </Service>
        ))}
        {services_id?.length > dispalyMax && (
          <ButtonWrapper onPress={() => setDisplayPanel("services")}>
            <Text color="blue" weight="bold">
              {t("search.seeMore")}
            </Text>
          </ButtonWrapper>
        )}
      </ServicesList>
    </ServicesWrapper>
  );
}
