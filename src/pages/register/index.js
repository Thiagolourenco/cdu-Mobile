import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { signUpRequest } from "../../store/modules/auth/actions";

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
  Title,
  Header
} from "./style";

function Register({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleBackNavigation() {
    navigation.navigate("Login");
  }

  function handleCadastrar() {
    dispatch(signUpRequest(username, email, password));

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
            <Input
              placeholder="Seu Nome"
              value={username}
              onChangeText={setUsername}
              placeholderTextColor="#000"
            />
          </FormInput>
          <FormInput>
            <MaterialCommunityIcons
              name="email-outline"
              size={16}
              color="#000"
            />
            <Input
              placeholder="Seu e-mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#000"
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
          <ButtonEntrar onPress={handleCadastrar}>
            {loading ? (
              <ActivityIndicator size={16} color="#fff" />
            ) : (
              <ButtonText>CADASTRAR</ButtonText>
            )}
          </ButtonEntrar>
        </Form>
      </Container>
    </Background>
  );
}

export default Register;
