import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";

import background from "../../assets/background.png";
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
  ButtonTextFinal,
  ButtonFoto
} from "./style";

function Documentacao({ navigation }) {
  const [image, setImage] = useState(null);

  async function handleImage() {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(response.uri);

    if (!response.cancelled) {
      setImage(response.uri);
    }
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Title>Documentos</Title>
        </Header>
        <Content>
          <TextButton>Foto</TextButton>
          <ButtonFoto onPress={handleImage}>
            <ImageFoto source={{ uri: image }} />
          </ButtonFoto>
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
