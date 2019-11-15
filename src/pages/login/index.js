import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import { signInRequest } from "../../store/modules/auth/actions";

import background from "../../assets/background.png";
import logo from "../../assets/image.png";

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
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    navigation.navigate("Register");
  }

  function handleResetPassword() {
    navigation.navigate("Reset");
  }

  function handleHome() {
    dispatch(signInRequest(email, password));
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
            <Input
              placeholder="Seu e-mail"
              keyboardType="email-address"
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
            />
          </FormInput>
          <FormInput>
            <AntDesign name="lock" size={18} color="#000" />
            <Input
              placeholder="*******"
              placeholderTextColor="#000"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </FormInput>
          <ButtonEntrar onPress={handleHome}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>ENTRAR</ButtonText>
            )}
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
