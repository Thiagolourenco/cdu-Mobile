import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../assests/background.png";
import {
  Container,
  Background,
  Header,
  Title,
  Content,
  TextButton,
  ImageFoto,
  ButtonFile,
  Input,
  ButtonFinalizar,
  ButtonTextFinal
} from "./style";

function Documentacao({ navigation }) {
  return (
    <Background source={background}>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Title>Documentos</Title>
        </Header>
        <Content>
          <TextButton>Foto</TextButton>
          <ImageFoto />
          <TextButton>Declaração</TextButton>
          <ButtonFile onPress={() => {}} />
          <TextButton>Grade Curricular</TextButton>
          <ButtonFile onPress={() => {}} />
          <TextButton>CPF</TextButton>
          <Input />
          <ButtonFinalizar onPress={() => {}}>
            <ButtonTextFinal>FINALIZAR</ButtonTextFinal>
          </ButtonFinalizar>
        </Content>
      </Container>
    </Background>
  );
}

Documentacao.navigationOptions = {
  header: null
};

export default Documentacao;
