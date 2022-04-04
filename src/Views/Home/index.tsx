import { useState } from "react";

import Checkbox from "~/Components/Checkbox";
import Text from "~/Components/Ui-kit/Text";

export default function Home(): JSX.Element {
  const [check, setCheck] = useState(true);

  return (
    <>
      <Text type="titleXL">Home</Text>
      <Checkbox
        label={"coucou"}
        onChange={() => setCheck(!check)}
        checked={check}
      />
    </>
  );
}
