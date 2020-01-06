import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import {
  SafeAreaView,
  Picker,
  Modal,
  TouchableOpacity,
  Text
} from "react-native";

import background from "../../../assets/background.png";
import {
  Background,
  Container,
  Title,
  TextButton,
  Content,
  Input,
  ButtonAdd,
  SelectPicker,
  ButtonSelectPicker
} from "./style";

import api from "../../../services/api";

export default function Cadastro({ navigation }) {
  const [name_complete, setNameComplete] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [course, setCourse] = useState("");
  const [college, setCollege] = useState("");
  const [shift, setShift] = useState("");
  const [visible, setVisible] = useState(false);
  const [cpf, setCpf] = useState("22355588720");

  async function handleDocument() {
    // const data = { name_complete, birthdate, course, college, shift };
    // await api
    //   .post("documents_folk", {
    //     name_complete,
    //     birthdate,
    //     course,
    //     college,
    //     shift,
    //     cpf
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    navigation.navigate("DadosDoc", {
      name_complete,
      birthdate,
      course,
      college,
      shift
    });

    // Realizar cadastro das informacoes dos usuario, sem passar os parametros
    // com os dados dos inputs
  }

  function handleVisible() {
    setVisible(true);
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
        <SafeAreaView
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          <Title>Cadastro</Title>
          <Content>
            <TextButton>Nome Completo</TextButton>
            <Input value={name_complete} onChangeText={setNameComplete} />
            <TextButton>Data de Nascimento</TextButton>
            <Input value={birthdate} onChangeText={setBirthdate} />
            <TextButton>Curso</TextButton>
            <Input value={course} onChangeText={setCourse} />
            <TextButton>Faculdade</TextButton>
            <Input value={college} onChangeText={setCollege} />
            <TextButton>Turno</TextButton>
            <Input value={shift} onChangeText={setShift} />

            {/* <SelectPicker
              selectedValue={turno}
              onValueChange={(itemValue, itemIndex) => setTurno(itemValue)}
            >
              <Picker.Item label="Manha" value="manha" />
              <Picker.Item label="Tarde" value="tarde" />
              <Picker.Item label="Noite" value="noite" />
            </SelectPicker> */}
          </Content>
          <ButtonAdd onPress={handleDocument}>
            <Icon name="keyboard-arrow-right" color="#fff" size={40} />
          </ButtonAdd>
        </SafeAreaView>
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
