import React from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import background from "../../assests/background.png";
import logo from "../../assests/image.png";

import {
  Background,
  Container,
  Logo,
  Form,
  FormInput,
  Input,
  ButtonEntrar,
  ButtonText,
  ResetPassText,
  CadastrarText
} from "./style";

function Login({ navigation }) {
  function handleRegister() {
    navigation.navigate("Register");
  }

  function handleResetPassword() {
    navigation.navigate("Reset");
  }

  function handleHome() {
    navigation.navigate("Home");
  }

  return (
    <Background source={background}>
      <Container behavior="padding">
        <Logo source={logo} />
        <Form>
          <FormInput>
            <MaterialCommunityIcons
              name="email-outline"
              size={16}
              color="#000"
            />
            <Input placeholder="Seu e-mail" placeholderTextColor="#000" />
          </FormInput>
          <FormInput>
            <AntDesign name="lock" size={18} color="#000" />
            <Input
              placeholder="*******"
              placeholderTextColor="#000"
              secureTextEntry
            />
          </FormInput>
          <ButtonEntrar onPress={handleHome}>
            <ButtonText>ENTRAR</ButtonText>
          </ButtonEntrar>
          <TouchableOpacity activeOpacity={0.7} onPress={handleResetPassword}>
            <ResetPassText>esqueceu senha</ResetPassText>
          </TouchableOpacity>
        </Form>
        <TouchableOpacity activeOpacity={0.7} onPress={handleRegister}>
          <CadastrarText>Solicite seu cadastro, aqui</CadastrarText>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}

export default Login;
