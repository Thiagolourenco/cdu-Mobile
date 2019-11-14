import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

import background from "../../assets/background.png";
import logo from "../../assets/image.png";

import {
  Background,
  Container,
  Logo,
  Form,
  FormInput,
  Input,
  ButtonReset,
  ButtonText,
  Title,
  Header
} from "./style";

function Reset({ navigation }) {
  const [loading, setLoading] = useState(false);

  function handleBackNavigation() {
    navigation.navigate("Login");
  }

  function handleCadastrar() {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    setLoading(true);
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
        <Header>
          <TouchableOpacity onPress={handleBackNavigation} activeOpacity={0.7}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Logo source={logo} />
        </Header>
        <Title>CDU - CAMINHO DA UNIVERSIDADE</Title>
        <Form>
          <FormInput>
            <FontAwesome name="user-o" size={16} color="#000" />
            <Input placeholder="Seu e-mail" placeholderTextColor="#000" />
          </FormInput>

          <ButtonReset onPress={handleCadastrar}>
            {loading ? (
              <ActivityIndicator size={16} color="#fff" />
            ) : (
              <ButtonText>RESETAR</ButtonText>
            )}
          </ButtonReset>
        </Form>
      </Container>
    </Background>
  );
}

export default Reset;
