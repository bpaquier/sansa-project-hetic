/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { useNavigate } from "react-router-native";

import RegisterIllustration from "./registerIllustation";
import { BottomText } from "./styles";
import Form from "~/Components/Form";
import PageContentWrapper from "~/Components/PageContentWrapper";
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
            label: "Téléphone",
            name: "tel",
            type: "tel",
            defaultValue: ""
          },
          /*  {
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
          }, */
          {
            label: "Votre mot de passe",
            name: "password",
            type: "password",
            required: true,
            checkPwd: true,
            bottomText:
              "Doit contenir 8 caractères avec une majuscule et un chiffre"
          },
          {
            type: "checkbox",
            label:
              "J'ai lu et j'accepte les conditions générales d'utilisation",
            forceChecked: false,
            name: "consent",
            required: true
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          Vous avez déja un compte?
        </Text>
      </BottomText>
      <Button
        text="Se connecter"
        type="tertiary"
        onPress={() => navigate("/login")}
      />
    </>
  );

  return (
    <PageContentWrapper>
      <FormPageTemplate image={Image} form={FormComponent} />
    </PageContentWrapper>
  );
}
