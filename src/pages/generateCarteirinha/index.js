import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../assets/background.png";
import logo from "../../assets/image.png";

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

function GenerateCarteirinha({ navigation }) {
  return (
    <Background source={background}>
      <Container>
        <TouchableOpacity
          onPress={() => navigation.navigate("Users")}
          style={{ alignSelf: "flex-start", marginLeft: 20 }}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Title>Carteirinha</Title>
        <Header>
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
