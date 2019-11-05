import React from "react";
import { Text } from "react-native";
import background from "../../assests/background.png";

import {
  Background,
  Container,
  Title,
  ImagePerfil,
  Label,
  InfoUser,
  Content,
  ButtonGenerate,
  ButtonText
} from "./style";

function Users() {
  return (
    <Background source={background}>
      <Container>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: 20
          }}
        >
          Sair
        </Text>
        <Title>MEU PERFIL</Title>
        <ImagePerfil />
        <Content>
          <Label>Nome</Label>
          <InfoUser>Thiago Lourenço</InfoUser>
          <Label>Faculdade</Label>
          <InfoUser>Estácio - FIC</InfoUser>
          <Label>Curso</Label>
          <InfoUser>Sistema da Informação</InfoUser>
        </Content>
        <ButtonGenerate onPress={() => {}}>
          <ButtonText>GERAR CARTEIRINHA</ButtonText>
        </ButtonGenerate>
      </Container>
    </Background>
  );
}

export default Users;
