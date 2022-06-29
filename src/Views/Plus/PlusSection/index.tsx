import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type PlusSectionProps = {
  isMobile?: boolean;
  isConnected?: boolean;
};

const plusContent = [
  { title: "Nous contacter", link: "#" },
  { title: "Langues", link: "#" },
  { title: "Politique de confidentialité", link: "#" },
  { title: "Mentions Légales", link: "#" },
  { title: "CGU", link: "#" },
  { title: "Se déconnecter", link: "#" }
];

export default function PlusSection({
  isMobile,
  isConnected
}: PlusSectionProps): JSX.Element {
  const plusContentToDisplay = !isMobile
    ? plusContent.filter(
        ({ title }) => title !== "Langues" && title !== "Se déconnecter"
      )
    : !isConnected
    ? plusContent.filter(({ title }) => title !== "Se déconnecter")
    : plusContent;

  return (
    <>
      <TextWrapper marginBottom={16} type="titleL">
        Plus
      </TextWrapper>
      <Separator orientation="horizontal" theme="dark" width="100%" />
      {plusContentToDisplay.map((content) => (
        <TextWrapper
          key={content.title}
          link
          to={content.link}
          marginTop={16}
          type="paragraph"
          color="grey"
        >
          {content.title}
        </TextWrapper>
      ))}
    </>
  );
}
