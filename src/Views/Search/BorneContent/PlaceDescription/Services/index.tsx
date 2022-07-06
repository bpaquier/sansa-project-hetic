import { useTranslation } from "react-i18next";

import { SmallTitleWrapper } from "../styles";
import {
  ServicesList,
  ServicesWrapper,
  IconWrapper,
  Service,
  ButtonWrapper
} from "./styles";
import Icon from "~/Components/Icon";
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
  const dispalyMax = 16;
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
            <IconWrapper>
              <Icon category={service} withBackground />
            </IconWrapper>
            <Text>{t(`search.services.${service}`)}</Text>
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
