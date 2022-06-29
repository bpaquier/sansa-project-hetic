import {
  ConnectedIllustrationsWrapper,
  ConnectedIllustrationWrapper
} from "./styles";
import Separator from "~/Components/Ui-kit/Separator";
import Text from "~/Components/Ui-kit/Text";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";
import DisconnectIllustration from "~/Views/Plus/Illustrations/DisconnectIllustration";
import HeartIllustration from "~/Views/Plus/Illustrations/HeartIllustration";
import SafeIllustration from "~/Views/Plus/Illustrations/SafeIllustration";
import TakeNotesIllustration from "~/Views/Plus/Illustrations/TakeNotesIllustration";

const connectedContent = [
  { title: "Nouvelle note", illustration: <TakeNotesIllustration /> },
  { title: "Coffre-fort numérique", illustration: <SafeIllustration /> },
  { title: "Mes lieux favoris", illustration: <HeartIllustration /> },
  { title: "Se déconnecter", illustration: <DisconnectIllustration /> }
];

type SansaDescriptionConnectedProps = {
  isMobile?: boolean;
};

export default function SansaDescriptionConnected({
  isMobile
}: SansaDescriptionConnectedProps): JSX.Element {
  return (
    <>
      <Text type={isMobile ? "titleL" : "titleM"}>Bonjour Timothé !</Text>
      {isMobile && (
        <>
          <Separator orientation="horizontal" columnWidth={22} margin={16} />
          {connectedContent.map(
            (content, index) =>
              index !== connectedContent.length && (
                <TextWrapper
                  link
                  to="#"
                  marginTop={index !== 0 ? 16 : 0}
                  key={content.title}
                  type="paragraph"
                  color="grey"
                >
                  {content.title}
                </TextWrapper>
              )
          )}
        </>
      )}
      {!isMobile && (
        <ConnectedIllustrationsWrapper>
          {connectedContent.map((content, index) => {
            const isDisabled = connectedContent.length - 1 !== index;
            return (
              <ConnectedIllustrationWrapper
                onPress={() => {
                  //TODO
                }}
                key={content.title}
              >
                {content.illustration}
                <Text
                  type="paragraph"
                  weight="bold"
                  color={isDisabled ? "black40" : "black"}
                >
                  {content.title}
                </Text>
              </ConnectedIllustrationWrapper>
            );
          })}
        </ConnectedIllustrationsWrapper>
      )}
    </>
  );
}
