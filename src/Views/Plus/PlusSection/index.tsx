import Separator from "~/Components/Ui-kit/Separator";
import TextWrapper from "~/Components/Ui-kit/TextWrapper";

type PlusSectionProps = {
  isMobile?: boolean;
};

const plusContent = [
  { title: "Nous contacter", link: "#" },
  { title: "Langues", link: "#" },
  { title: "Politique de confidentialité", link: "#" },
  { title: "Mentions Légales", link: "#" },
  { title: "CGU", link: "#" }
];

export default function PlusSection({
  isMobile
}: PlusSectionProps): JSX.Element {
  const plusContentToDisplay = !isMobile
    ? plusContent.filter((content) => content.title !== "Langues")
    : plusContent;

  return (
    <>
      <TextWrapper title="Plus" marginBottom={16} type="titleL" />
      <Separator orientation="horizontal" theme="dark" width="100%" />
      {plusContentToDisplay.map((content) => (
        <TextWrapper
          key={content.title}
          link
          to={content.link}
          marginTop={16}
          type="paragraph"
          color="grey"
          title={content.title}
        />
      ))}
    </>
  );
}
