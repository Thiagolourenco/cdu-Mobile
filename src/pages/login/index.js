import React from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

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
  ButtonText
} from "./style";

function Login() {
  return (
    <Background source={background}>
      <Container behavior="padding">
        <Logo source={logo} />
        <Form>
          <FormInput>
            <FontAwesome name="user-o" size={16} color="#000" />
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
          <ButtonEntrar>
            <ButtonText>ENTRAR</ButtonText>
          </ButtonEntrar>
        </Form>
      </Container>
    </Background>
  );
}

export default Login;
