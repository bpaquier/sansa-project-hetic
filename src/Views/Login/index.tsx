/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Image } from "react-native";
import { useNavigate } from "react-router-native";

import {
  PageWrapper,
  ImageWrapper,
  BottomText,
  PageWrapperBorne,
  PageContent,
  PageContentBorne
} from "./styles";
import Form from "~/Components/Form";
import Button from "~/Components/Ui-kit/Button";
import Text from "~/Components/Ui-kit/Text";
import { useGlobalContext } from "~/Contexts/globalContext";
import { ImageStyle } from "~/Styles/mixins.styles";

export default function Login(): JSX.Element {
  const { isMobile } = useGlobalContext();
  const GlobalWrapper = isMobile ? PageWrapper : PageWrapperBorne;
  const Content = isMobile ? PageContent : PageContentBorne;
  const navigate = useNavigate();
  return (
    <GlobalWrapper>
      <Content>
        <ImageWrapper>
          <Image
            style={ImageStyle.image}
            source={require("~/../assets/images/Team_success_TwoColor.png")}
          />
        </ImageWrapper>
        <Form
          title="Se connecter"
          submitCtaLabel="Se connecter"
          inlineCtaLabel="Mot de passe oublié"
          items={[
            {
              placeholder: "johndoe@gmail.com",
              label: "Votre email ou indentifiant",
              name: "ID",
              required: true
            },
            {
              label: "Votre mot de passe",
              name: "password",
              type: "password",
              required: true
            }
          ]}
        />
        <BottomText>
          <Text color="black40">Pas encore de compte?</Text>
        </BottomText>
        <Button
          text="S'incrire"
          type="tertiary"
          onPress={() => navigate("/")}
        />
      </Content>
    </GlobalWrapper>
  );
}
