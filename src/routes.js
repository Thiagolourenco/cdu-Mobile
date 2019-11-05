import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Icon from "@expo/vector-icons/MaterialIcons";

import Login from "./pages/login";
import Register from "./pages/register";
import Reset from "./pages/reset";
import Home from "./pages/home";
import Rotas from "./pages/rotas";
import Cadastro from "./pages/cadastro";
import Users from "./pages/users";

// Stacks
import Documentacao from "./pages/documentacao";

Icon.loadFont();

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Reset,
    Docume: createStackNavigator({
      Documentacao: { screen: Documentacao }
    }),
    home: createMaterialBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={25}
                color={focused ? "#5B456B" : "#000"}
              />
            )
          })
        },
        Rotas: {
          screen: Rotas,
          navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
              <Icon
                name="directions-bus"
                size={25}
                color={focused ? "#5B456B" : "#000"}
                s
              />
            )
          })
        },
        Cadastro: {
          screen: Cadastro,
          navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
              <Icon
                name="assignment"
                size={25}
                color={focused ? "#5B456B" : "#000"}
              />
            )
          })
        },
        Users: {
          screen: Users,
          navigationOptions: () => ({
            tabBarIcon: ({ focused }) => (
              <Icon
                name="person"
                size={30}
                color={focused ? "#5B456B" : "#000"}
              />
            )
          })
        }
      },
      {
        // activeColor: "#fff",
        inactiveColor: "#3e2465",
        barStyle: { backgroundColor: "#fff" }
      }
    )
  })
);

export default Routes;
