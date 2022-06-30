import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const Image = <RegisterIllustration />;

  const FormComponent = (
    <>
      <Form
        title={t("common.sInscrire")}
        submitCtaLabel={t("common.sInscrire")}
        items={[
          {
            placeholder: "John Doe",
            label: t("comptesFormulaires.identifiant"),
            name: "ID",
            required: true,
            type: "text"
          },
          {
            placeholder: "johndoe@gmail.com",
            label: t("comptesFormulaires.adresseMail"),
            name: "email",
            required: true,
            type: "email"
          },
          {
            label: t("comptesFormulaires.telephone"),
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
            label: t("comptesFormulaires.motDePasse"),
            name: "password",
            type: "password",
            required: true,
            checkPwd: true,
            bottomText: t("comptesFormulaires.motDePasseCaracteresPrompt")
          },
          {
            type: "checkbox",
            label: t("comptesFormulaires.jAiLuEtJaccepte"),
            forceChecked: false,
            name: "consent",
            required: true
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          {t("comptesFormulaires.vousAvezDejaUnCompte")}
        </Text>
      </BottomText>
      <Button
        text={t("common.seConnecter")}
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
