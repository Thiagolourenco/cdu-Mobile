import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Icon from "@expo/vector-icons/MaterialIcons";

import Login from "./pages/login";
import Register from "./pages/register";
import Reset from "./pages/reset";

// Bottom Tab Navigator
import Home from "./pages/home";
import Rotas from "./pages/rotas";
import Users from "./pages/users";

// Navegação Cadastro da documentação
import DadosPessoais from "./pages/Documentos/DadosPessoais";
import DadosDoc from "./pages/Documentos/DadosDoc";

import Generate from "./pages/generateCarteirinha";

Icon.loadFont();

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Login,
      Register,
      Reset
    }),
    App: createMaterialBottomTabNavigator(
      {
        Home,
        Rotas,
        Doc: {
          screen: createStackNavigator(
            {
              DadosPessoais,
              DadosDoc
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: "#fff",
                headerLeftContainerStyle: {
                  marginLeft: 20
                }
              }
            }
          ),
          navigationOptions: {
            tabBarLabel: "Documentação",
            tabBarIcon: ({ focused }) => (
              <Icon
                name="assignment"
                size={25}
                color={focused ? "#5B456B" : "#000"}
              />
            )
          }
        },
        Users
      },
      {
        activeColor: "#000",
        inactiveColor: "#3e2465",
        barStyle: { backgroundColor: "#fff" }
      }
    ),
    Rest: createSwitchNavigator({
      Generate
    })
  })
);

export default Routes;
