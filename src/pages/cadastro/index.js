import React from "react";
import { Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../assests/background.png";
import {
  Background,
  Container,
  Title,
  InputText,
  Content,
  Input,
  ButtonAdd
} from "./style";

function Cadastro() {
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
        <ButtonAdd>
          <Icon name="keyboard-arrow-right" color="#fff" size={40} />
        </ButtonAdd>
      </Container>
    </Background>
  );
}

export default Cadastro;
