/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

//import { Image } from "react-native";
import { useNavigate } from "react-router-native";

import LoginIllustration from "./loginIllustation";
import { BottomText } from "./styles";
import Form from "~/Components/Form";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
//import { ImageStyle } from "~/Styles/mixins.styles";
import FormPageTemplate from "~/Views/Account/FormPageTemplate";

export default function Login(): JSX.Element {
  const navigate = useNavigate();

  const Image = <LoginIllustration />;

  const FormComponent = (
    <>
      <Form
        title="Se connecter"
        submitCtaLabel="Se connecter"
        inlineCtaLabel="Mot de passe oublié"
        items={[
          {
            placeholder: "johndoe@gmail.com",
            label: "Votre email ou indentifiant",
            name: "ID",
            required: false,
            type: "email"
          },
          {
            label: "Votre mot de passe",
            name: "password",
            type: "password"
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          Pas encore de compte?
        </Text>
      </BottomText>
      <Button
        text="S'incrire"
        type="tertiary"
        onPress={() => navigate("/register")}
      />
    </>
  );

  return <FormPageTemplate image={Image} form={FormComponent} />;
}
