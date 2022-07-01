import { useEffect, useState } from "react";

import { ScrollView } from "react-native";

import {
  DescriptionWrapper,
  TitleWrapper,
  DescriptionText,
  DateWrapper,
  ButtonWrapper
} from "./styles";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { PlaceProps } from "~/Contexts/searchContext";

interface DescriptionProps extends PlaceProps {
  setDisplayPanel?: (arg: "description" | "services" | null) => void;
}

export default function Description({
  description,
  last_updata,
  setDisplayPanel
}: DescriptionProps): JSX.Element {
  const date = new Date(last_updata);
  const formatedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  const lineHeight = 20;

  const [textWrapperHeight, setTextWrapperHeight] = useState<number>(null);
  const [textHeight, setTextHeight] = useState<number>(null);
  const [isTextLong, setIsTextLong] = useState<boolean>(false);
  const [formatedWrapperHeight, setFormatedWrapperHeight] =
    useState<string>(null);

  useEffect(() => {
    if (textHeight > textWrapperHeight) {
      setIsTextLong(true);
    } else {
      setIsTextLong(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textWrapperHeight, textHeight]);

  useEffect(() => {
    isTextLong && setFormatedWrapperHeight(`height: ${8 * lineHeight}px`);
    !isTextLong && setFormatedWrapperHeight(null);
  }, [isTextLong]);

  return (
    <DescriptionWrapper>
      <TitleWrapper>
        <Text type="titleM" color="blue">
          Mission
        </Text>
      </TitleWrapper>
      <DescriptionText
        height={formatedWrapperHeight && formatedWrapperHeight}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;

          textWrapperHeight === null && setTextWrapperHeight(height);
        }}
      >
        <ScrollView scrollEnabled={false}>
          <Text
            onLayout={(e) => {
              /* eslint-disable @typescript-eslint/no-unsafe-member-access */
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const { height } = e.nativeEvent.layout;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              setTextHeight(height);
            }}
            {...{ lineHeight }}
          >
            {description}
            {description}
          </Text>
        </ScrollView>
      </DescriptionText>
      {isTextLong && (
        <ButtonWrapper>
          <Button
            type="tertiary"
            text="... Voir plus"
            horizontalPosition="left"
            onPress={() => setDisplayPanel("description")}
          />
        </ButtonWrapper>
      )}
      <DateWrapper>
        <Text
          type="small"
          color="black20"
        >{`Dernières mises à jour le ${formatedDate}`}</Text>
      </DateWrapper>
    </DescriptionWrapper>
  );
}
