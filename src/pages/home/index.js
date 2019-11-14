import React from "react";

import { Container, Background, Header, Content, List } from "./style";
import Icon from "@expo/vector-icons/MaterialIcons";
import background from "../../assets/background.png";

export default function Home() {
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

Home.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Icon name="home" size={25} color={focused ? "#5B456B" : "#000"} />
  )
};
