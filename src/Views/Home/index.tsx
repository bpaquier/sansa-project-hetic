import Text from "~/Components/Ui-kit/Text";

interface HomePorps {}

export default function Home(props: HomePorps): JSX.Element {
  return (
    <>
      <Text type="titleXL">TitleXL</Text>
      <Text type="titleL">TitleL</Text>
      <Text type="titleM">TitleM</Text>
      <Text type="paragraph" weight="bold">
        Paragraph bold
      </Text>
      <Text type="paragraph" weight="medium">
        Paragraph medium
      </Text>
      <Text type="paragraph">Paragraph regular</Text>
      <Text type="paragraph" color="orange" weight="medium">
        I'm a link
      </Text>
      <Text type="small" weight="bold">
        Small paragrahp bold
      </Text>
      <Text type="small" weight="medium">
        Small paragrahp medium
      </Text>
      <Text type="small">Small paragrahp regular</Text>
      <Text type="small" color="orange" weight="medium">
        I'm a small link
      </Text>
    </>
  );
}
