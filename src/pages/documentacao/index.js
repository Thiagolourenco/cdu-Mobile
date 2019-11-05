import React from "react";
import { Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import background from "../../assests/background.png";
import { Container, Background, Header, Title, Content } from "./style";

function Documentacao() {
  return (
    <Background source={background}>
      <Container>
        <Header>
          <Icon name="arrow-back" size={24} color="#fff" />
          <Title>Documentos</Title>
        </Header>
        <Content></Content>
      </Container>
    </Background>
  );
}

Documentacao.navigationOptions = {
  header: null
};

export default Documentacao;
