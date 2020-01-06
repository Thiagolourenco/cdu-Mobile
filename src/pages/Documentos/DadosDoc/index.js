import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch } from "react-redux";
import { documentsFolkRequest } from "../../../store/modules/documents/actions";

import background from "../../../assets/background.png";

import api from "../../../services/api";

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
  const [cpf, setCpf] = useState("");

  // Parametros passado pelo react-navigation
  const name_complete = navigation.getParam("name_complete");
  const birthdate = navigation.getParam("birthdate");
  const course = navigation.getParam("course");
  const college = navigation.getParam("college");
  const shift = navigation.getParam("shift");

  const dispatch = useDispatch();

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

  async function handleConcluirCadastro() {
    // const { name_complete, birthdate, college, course, shift } = data;
    await api
      .post("documents_folk", {
        name_complete,
        birthdate,
        course,
        college,
        shift,
        cpf
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // sole.log(err));
    // dispatch(
    //   documentsFolkRequest(namecomplete, birthdate, course, college, shift, cpf)
    // );
    // Criar o Controller para upload de arquivos e da informacao do
    // CPF e cadastrar os uploads.https://source.unsplash.com/random/400x200
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
          <Input keyboardType="numeric" value={cpf} onChangeText={setCpf} />
          <ButtonFinalizar onPress={handleConcluirCadastro}>
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
