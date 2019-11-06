import React from "react";
import { Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../assests/background.png";
import logo from "../../assests/image.png";

import {
  Background,
  Container,
  Title,
  Header,
  Logo,
  TitleCdu,
  ImagePerfil,
  Label,
  InfoUser,
  Content,
  InfoImportant,
  Footer
} from "./style";

function GenerateCarteirinha() {
  return (
    <Background source={background}>
      <Container>
        <Icon
          style={{ alignSelf: "flex-start", marginLeft: 20 }}
          name="arrow-back"
          size={24}
          color="#fff"
        />
        <Title>Carteirinha</Title>
        <Header>
          <Logo source={logo} />
          <TitleCdu>CDU</TitleCdu>
        </Header>

        <ImagePerfil />
        <Content>
          <Label>Nome</Label>
          <InfoUser>Thiago Lourenço</InfoUser>
          <Label>Curso</Label>
          <InfoUser>Sistema de Informação</InfoUser>
          <Label>Matricula</Label>
          <InfoUser>201608143112</InfoUser>
          <Label>Validade</Label>
          <InfoUser>27/02/2020</InfoUser>
        </Content>
        <Footer>
          <InfoImportant>Válida mediate apresentação de</InfoImportant>
          <InfoImportant>documento de identidade com foto</InfoImportant>
        </Footer>
      </Container>
    </Background>
  );
}

GenerateCarteirinha.navigationOptions = {
  header: null
};

export default GenerateCarteirinha;
