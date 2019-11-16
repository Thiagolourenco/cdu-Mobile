import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../../assets/background.png";

import {
  Background,
  Container,
  Title,
  Header,
  TitleCdu,
  ImagePerfil,
  Label,
  InfoUser,
  Content,
  InfoImportant,
  Footer
} from "./style";

import perfil from "../../../assets/perfil.jpeg";

function GenerateCarteirinha({ navigation }) {
  return (
    <Background source={background}>
      <Container>
        <TouchableOpacity
          onPress={() => navigation.navigate("User")}
          style={{ alignSelf: "flex-start", marginLeft: 20 }}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Title>Carteirinha</Title>
        <Header>
          <TitleCdu>CDU</TitleCdu>
        </Header>

        <ImagePerfil source={perfil} />
        <Content>
          <Label>Nome</Label>
          <InfoUser>Thiago Lourenço Saraiva da Silva</InfoUser>
          <Label>Curso</Label>
          <InfoUser>Sistema de Informação</InfoUser>
          <Label>Matricula</Label>
          <InfoUser>20190312302</InfoUser>
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
