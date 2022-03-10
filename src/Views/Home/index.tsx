import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";

export default function Home(): JSX.Element {
  return (
    <>
      <Text type="titleXL">Home</Text>
      <Button
        text="Button"
        type="primary"
        isLoading
        //isDisabled
        //fitContent
        onPress={() => console.log("hello")}
      />
    </>
  );
}
