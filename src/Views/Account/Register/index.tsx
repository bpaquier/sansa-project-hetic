/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { useNavigate } from "react-router-native";

import RegisterIllustration from "./registerIllustation";
import { BottomText } from "./styles";
import Form from "~/Components/Form";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import FormPageTemplate from "~/Views/Account/FormPageTemplate";

export default function Register(): JSX.Element {
  const navigate = useNavigate();

  const Image = <RegisterIllustration />;

  const FormComponent = (
    <>
      <Form
        title="S'inscrire"
        submitCtaLabel="S'inscrire"
        items={[
          {
            placeholder: "John Doe",
            label: "Identifiant",
            name: "ID",
            required: true,
            type: "text"
          },
          {
            placeholder: "johndoe@gmail.com",
            label: "Adresse Mail",
            name: "email",
            required: true,
            type: "email"
          },
          {
            label: "Choisissez une question personnelle",
            type: "select",
            name: "question",
            options: [
              {
                label: "Quel est le nom de votre chat ?",
                value: "q1"
              },
              {
                label: "Où avez vous grandi ?",
                value: "q2"
              }
            ]
          },
          {
            label: "Votre réponse",
            name: "answer",
            required: true,
            type: "text"
          },
          {
            label: "Votre mot de passe",
            name: "password",
            type: "password"
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center">
          Pas encore de compte?
        </Text>
      </BottomText>
      <Button
        text="Vous avez déja un compte?"
        type="tertiary"
        onPress={() => navigate("/login")}
      />
    </>
  );

  return <FormPageTemplate image={Image} form={FormComponent} />;
}