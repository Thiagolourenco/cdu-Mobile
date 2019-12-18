import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useDispatch } from "react-redux";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

import { forgotPasswordRequest } from "../../store/modules/auth/actions";
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
  const dispatch = useDispatch();
  const redirect_url = "http://localhost:3000/forgot_password";

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  function handleBackNavigation() {
    navigation.navigate("Login");
  }

  function handleForgotPassword() {
    setLoading(true);
    setTimeout(() => {
      dispatch(forgotPasswordRequest(email, redirect_url));

      setLoading(false);
      navigation.navigate("Login");
    }, 3000);
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
            <Input
              placeholder="Seu e-mail"
              placeholderTextColor="#000"
              value={email}
              onChangeText={setEmail}
            />
          </FormInput>

          <ButtonReset onPress={handleForgotPassword}>
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
