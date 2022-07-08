import { useTranslation } from "react-i18next";

import {
  DescriptionWrapper,
  TitleWrapper,
  DateWrapper,
  TextWrapper
} from "./styles";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

interface DescriptionProps extends PlaceProps {
  setDisplayPanel?: (arg: "description" | "services" | null) => void;
}

export default function Description({
  description,
  last_updata
}: DescriptionProps): JSX.Element {
  const { t } = useTranslation();
  const date = new Date(last_updata);
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <DescriptionWrapper>
      <TitleWrapper>
        <Text type="titleM" color="blue">
          {t("search.mission")}
        </Text>
      </TitleWrapper>

      <TextWrapper>
        <Text>{description}</Text>
      </TextWrapper>
      <DateWrapper>
        <Text type="small" color="black20">{`${t(
          "search.lastUpdate"
        )}: ${formatedDate}`}</Text>
      </DateWrapper>
    </DescriptionWrapper>
  );
}
