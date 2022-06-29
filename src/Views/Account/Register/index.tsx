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
        title={t("sInscrire")}
        submitCtaLabel={t("sInscrire")}
        items={[
          {
            placeholder: "John Doe",
            label: t("identifiant"),
            name: "ID",
            required: true,
            type: "text"
          },
          {
            placeholder: "johndoe@gmail.com",
            label: t("adresseMail"),
            name: "email",
            required: true,
            type: "email"
          },
          {
            label: t("telephone"),
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
            label: t("motDePasse"),
            name: "password",
            type: "password",
            required: true,
            checkPwd: true,
            bottomText: t("motDePasseCaracteresPrompt")
          },
          {
            type: "checkbox",
            label: t("jAiLuEtJaccepte"),
            forceChecked: false,
            name: "consent",
            required: true
          }
        ]}
      />
      <BottomText>
        <Text color="black40" textAlign="center" type="small">
          {t("vousAvezDejaUnCompte")}
        </Text>
      </BottomText>
      <Button
        text={t("seConnecter")}
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
