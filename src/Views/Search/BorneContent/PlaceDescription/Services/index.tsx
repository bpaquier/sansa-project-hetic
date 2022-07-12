import { useTranslation } from "react-i18next";

import { SmallTitleWrapper } from "../styles";
import {
  ServicesList,
  ServicesWrapper,
  Service,
  ButtonWrapper,
  ListWrapper
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
  const displayMax = 10;
  return (
    <ServicesWrapper>
      <SmallTitleWrapper>
        <Text type="titleM" color="blue">
          {t("search.servicesOffered")}
        </Text>
      </SmallTitleWrapper>
      <ListWrapper horizontal={true}>
        <ServicesList>
          {services_id?.slice(0, displayMax)?.map((service, i) => (
            <Service key={`${service}-${i}`}>
              <ServiceWithIcon
                text={t(`search.services.${service}`)}
                category={service}
                withBackground
              />
            </Service>
          ))}
          {services_id?.slice(0, displayMax)?.map((service, i) => (
            <Service key={`${service}-${i}`}>
              <ServiceWithIcon
                text={t(`search.services.${service}`)}
                category={service}
                withBackground
              />
            </Service>
          ))}
          {services_id?.slice(0, displayMax)?.map((service, i) => (
            <Service key={`${service}-${i}`}>
              <ServiceWithIcon
                text={t(`search.services.${service}`)}
                category={service}
                withBackground
              />
            </Service>
          ))}
          {services_id?.length > displayMax && (
            <ButtonWrapper
              onPress={() => {
                setDisplayPanel("services");
              }}
            >
              <Text color="blue" weight="bold">
                {t("search.seeMore")}
              </Text>
            </ButtonWrapper>
          )}
        </ServicesList>
      </ListWrapper>
    </ServicesWrapper>
  );
}
