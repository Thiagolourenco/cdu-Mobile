import React from "react";
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

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
  Title
} from "./style";

function Register() {
  return (
    <Background source={background}>
      <Container behavior="padding">
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
          <Logo source={logo} />
        </View>
        <Title>CDU - CAMINHO DA UNIVERSIDADE</Title>
        <Form>
          <FormInput>
            <FontAwesome name="user-o" size={16} color="#000" />
            <Input placeholder="Seu e-mail" placeholderTextColor="#000" />
          </FormInput>
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
          <ButtonEntrar>
            <ButtonText>CADASTRAR</ButtonText>
          </ButtonEntrar>
        </Form>
      </Container>
    </Background>
  );
}

export default Register;
