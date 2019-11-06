import React from "react";
import { TouchableOpacity } from "react-native";
import background from "../../assests/background.png";
import Icon from "@expo/vector-icons/FontAwesome";
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

function Users({ navigation }) {
  function handleGenerate() {
    navigation.navigate("Generate");
  }

  return (
    <Background source={background}>
      <Container>
        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
            marginLeft: 20
          }}
        >
          <Icon name="sign-out" size={30} color="#fff" />
        </TouchableOpacity>
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
        <ButtonGenerate onPress={handleGenerate}>
          <ButtonText>GERAR CARTEIRINHA</ButtonText>
        </ButtonGenerate>
      </Container>
    </Background>
  );
}

export default Users;
