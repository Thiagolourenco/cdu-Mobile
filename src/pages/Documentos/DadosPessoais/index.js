import React, {useState} from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import {SafeAreaView, Picker, Modal, TouchableOpacity, Text} from 'react-native'

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

export default function Cadastro({ navigation }) {
  const [name, setName] = useState('');
  const [dateNasc, setDateNasc] = useState(new Date());
  const [curso, setCurso] = useState('');
  const [faculdade, setFaculdade] = useState('');
  const [turno, setTurno] = useState('');
  const [visible, setVisible] = useState(false);

  function handleDocument() {
    const data =  { name, dateNasc, curso, faculdade, turno };

    navigation.navigate("DadosDoc");

    // Realizar cadastro das informacoes dos usuario, sem passar os parametros 
    // com os dados dos inputs
  }

  function handleVisible() {
    setVisible(true)
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
      <SafeAreaView style={{ justifyContent: "center", alignItems: "center", alignSelf: "stretch"}}>

        <Title>Cadastro</Title>
        <Content>
          <TextButton>Nome Completo</TextButton>
          <Input placeholder="Nome Completo" value={name} onChangeText={setName}/>
          <TextButton>Data de Nascimento</TextButton>
          <Input value={dateNasc} onChangeText={setDateNasc}/>
          <TextButton>Curso</TextButton>
          <Input value={curso} onChangeText={setCurso}/>
          <TextButton>Faculdade</TextButton>
          <Input value={faculdade} onChangeText={setFaculdade}/>
          <TextButton >Turno</TextButton>
          {/* <Input value={turno} onChangeText={setTurno}/> */}

            <SelectPicker
              selectedValue={turno}
              onValueChange={(itemValue, itemIndex) => 
                setTurno(itemValue)
              }
            >
              <Picker.Item label="Manha" value="manha" />
              <Picker.Item label="Tarde" value="tarde"/>
              <Picker.Item label="Noite" value="noite"/>
            </SelectPicker>
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
