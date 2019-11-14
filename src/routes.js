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
import Cadastro from "./pages/cadastro";
import Users from "./pages/users";

// Navegação Extra
import Documentacao from "./pages/documentacao";
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
        Cadastro,
        Users
      },
      {
        activeColor: "#000",
        inactiveColor: "#3e2465",
        barStyle: { backgroundColor: "#fff" }
      }
    ),
    Rest: createSwitchNavigator({
      Documentacao,
      Generate
    })
  })
);

export default Routes;
