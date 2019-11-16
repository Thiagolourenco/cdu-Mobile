import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as DocumentPicker from "expo-document-picker";

import background from "../../../assets/background.png";

import {
  Container,
  Background,
  Header,
  Title,
  Content,
  TextButton,
  ButtonFile,
  Input,
  ButtonFinalizar,
  ButtonTextFinal,
  ButtonFileText
} from "./style";

import CameraImage from "../../../components/CameraImage";

function Documentacao({ navigation }) {
  const [doc, setDoc] = useState([]);
  const [gradeDoc, setGradeDoc] = useState([]);

  async function handleDoc() {
    const response = await DocumentPicker.getDocumentAsync({});

    console.log(response);
    setDoc(response);
  }

  async function handleGradeDoc() {
    const response = await DocumentPicker.getDocumentAsync({});

    console.log(response);
    setGradeDoc(response);
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
        <Header>
          <TouchableOpacity
            onPress={() => navigation.navigate("DadosPessoais")}
          >
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Title>Documentos</Title>
        </Header>
        <Content>
          <TextButton>Foto</TextButton>
          <CameraImage />

          <TextButton>Declaração</TextButton>
          <ButtonFile onPress={handleDoc}>
            <ButtonFileText>{doc.name}</ButtonFileText>
          </ButtonFile>
          <TextButton>Grade Curricular</TextButton>
          <ButtonFile onPress={handleGradeDoc}>
            <ButtonFileText>{gradeDoc.name}</ButtonFileText>
          </ButtonFile>
          <TextButton>CPF</TextButton>
          <Input keyboardType="numeric" />
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
