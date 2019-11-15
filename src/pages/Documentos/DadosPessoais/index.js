import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../../assets/background.png";
import {
  Background,
  Container,
  Title,
  InputText,
  Content,
  Input,
  ButtonAdd
} from "./style";

export default function Cadastro({ navigation }) {
  function handleDocument() {
    navigation.navigate("DadosDoc");
  }

  return (
    <Background source={background}>
      <Container>
        <Title>Cadastro</Title>
        <Content>
          <InputText>Nome Completo</InputText>
          <Input />
          <InputText>Data de Nascimento</InputText>
          <Input />
          <InputText>Curso</InputText>
          <Input />
          <InputText>Faculdade</InputText>
          <Input />
          <InputText>Turno</InputText>
          <Input />
        </Content>
        <ButtonAdd onPress={handleDocument}>
          <Icon name="keyboard-arrow-right" color="#fff" size={40} />
        </ButtonAdd>
      </Container>
    </Background>
  );
}

Cadastro.navigationOptions = {
  tabBarLabel: "Documentação",
  tabBarIcon: ({ focused }) => (
    <Icon name="assignment" size={25} color={focused ? "#5B456B" : "#000"} />
  )
};
