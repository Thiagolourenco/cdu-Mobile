import React from "react";
import { Text, FlatList, View } from "react-native";

import { Container, Background, Header, Content, List } from "./style";
import Icon from "@expo/vector-icons/FontAwesome";
import background from "../../assests/background.png";

function Home() {
  return (
    <Background source={background}>
      <Container>
        <Header>
          <Content></Content>
        </Header>
      </Container>
      <List />
      <List />
      <List />
    </Background>
  );
}

export default Home;
